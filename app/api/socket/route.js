import { Server } from "socket.io"

let io

let waitingUser = null

export async function GET(req) {

  if (!io) {

    io = new Server(3001, {
      cors: {
        origin: "*",
      },
    })

    let online = 0

    io.on("connection", (socket) => {

      online++

      io.emit("online", online)

      console.log("Yeni kullanıcı")

      if (waitingUser) {

        socket.partner = waitingUser.id
        waitingUser.partner = socket.id

        io.to(socket.id).emit("matched")
        io.to(waitingUser.id).emit("matched")

        waitingUser = null

      } else {

        waitingUser = socket

      }

      socket.on("disconnect", () => {

        online--

        io.emit("online", online)

        if (waitingUser?.id === socket.id) {
          waitingUser = null
        }

      })

    })

    console.log("Socket aktif")
  }

  return Response.json({
    success: true,
  })
}