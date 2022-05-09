// import { useEffect, useState } from "react";
// import { KeroCanvas, KeroDraw } from "keronote";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// const CANVAS_WIDTH = 800;
// const CANVAS_HEIGHT = 500;
// var kero = new KeroCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
// var draw = new KeroDraw(kero);
// draw.size = 4;
// draw.dither = 0;
// draw.color = 8;

// const colors = [
//   { color: "gray", id: 0 },
//   { color: "white", id: 1 },
//   { color: "red", id: 2 },
//   { color: "HotPink", id: 3 },
//   { color: "DarkMagenta", id: 4 },
//   { color: "Blue", id: 5 },
//   { color: "aqua", id: 6 },
//   { color: "teal", id: 7 },
//   { color: "DarkGreen", id: 8 },
//   { color: "LightGreen", id: 9 },
//   { color: "YellowGreen", id: 10 },
//   { color: "Yellow", id: 11 },
//   { color: "Orange", id: 12 },
//   { color: "Brown", id: 13 },
// ];

// const Canva = () => {
//   useEffect(() => {
//     let c = document.getElementById("keronote");
//     let ctx = c.getContext("2d");
//     var offset = { x: 0, y: 0, w: 0, h: 0 };

//     // ------------
//     // MOUSE EVENTS
//     // ------------

//     function relative(e) {
//       let target, x, y;
//       // Get the target
//       target = e.target;
//       // Mouse position
//       x = e.clientX - offset.x;
//       y = e.clientY - offset.y;
//       // Ajust Aspect Ratio
//       let dimensions = kero.dimensions;
//       x = Math.floor((x / offset.w) * dimensions.w);
//       y = Math.floor((y / offset.h) * dimensions.h);

//       // Return New Point
//       return { x: x, y: y };
//     }

//     function canvas_pointermove(e) {
//       let p = relative(e);
//       draw.push(p.x, p.y);
//       draw.dispatch();
//       kero.render();

//       let data, dimensions, buffer;
//       dimensions = kero.dimensions;
//       buffer = new Uint8ClampedArray(kero.buffer.buffer);
//       data = new ImageData(buffer, dimensions.w, dimensions.h);

//       ctx.putImageData(data, 0, 0);
//       // Prevent Default
//       e.preventDefault();
//     }

//     function canvas_pointerup() {
//       window.removeEventListener("mousemove", canvas_pointermove);
//       window.removeEventListener("mouseup", canvas_pointerup);
//       document.body.style.cursor = "default";
//     }

//     c.onpointerdown = (e) => {
//       let bound = e.target.getBoundingClientRect();
//       offset.x = bound.left;
//       offset.y = bound.top;
//       offset.w = bound.width;
//       offset.h = bound.height;

//       draw.color = (counter + 1) & 15;

//       let p = relative(e);
//       draw.first(p.x, p.y);

//       // Bind Events to Window
//       window.addEventListener("mousemove", canvas_pointermove);
//       window.addEventListener("mouseup", canvas_pointerup);
//     };
//   });

//   const [color, setColor] = useState("black");
//   const [counter, setCounter] = useState(0);

//   const handleClick = (e, color, id) => {
//     e.preventDefault();

//     if (id != 13) {
//       setColor(color);
//       setCounter(counter + 1);
//     } else {
//       setColor("black");
//       setCounter(0);
//     }
//   };
//   return (
//     <>
//       <div>
//         {/* Canvas */}
//         <div className="container">
//           <div className="container-canvas">
//             <canvas
//               id="keronote"
//               width={CANVAS_WIDTH}
//               height={CANVAS_HEIGHT}
//             ></canvas>
//           </div>
//           {/* Tools */}
//           <div className="container-tools">
//             <Typography variant="h4" textAlign="center">
//               Keronote
//             </Typography>

//             <Button
//               variant="outlined"
//               color="primary"
//               onClick={(event) =>
//                 handleClick(event, colors[counter].color, colors[counter].id)
//               }
//             >
//               Select color
//             </Button>

//             <Box
//               sx={{
//                 backgroundColor: `${color}`,
//                 padding: 5,
//                 mt: 1,
//                 border: "1px solid #ccc",
//                 borderRadius: 2,
//               }}
//             />

//             <Button variant="outlined" color="primary">
//               Save animation
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Canva;
