import express from "express";
import routes from "./src/routes/postsRoutes.js";
// const posts = [
//     { id: 1,
//       descricao: "Uma foto teste",
//       imagem: "https://placecats.com/millie/300/150"},
//     { id: 2, 
//       descricao: "Gato persa brincando com um novelo de lã",
//       imagem: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"},
//     { id: 3,
//       descricao: "Paisagem montanhosa com um lago cristalino",
//       imagem: "https://source.unsplash.com/random/300x200/?mountains,lake"},
// ];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });
