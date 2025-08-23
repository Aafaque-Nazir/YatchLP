import { motion } from "framer-motion";
export default function Gallery() {
const images = [
"p1.jpeg",
"p2.jpeg",
"p3.jpeg",
"p9.jpeg",
"p5.jpeg",
"p6.jpeg",
"p10.jpeg",
"p9.jpeg",
];
const video = [
"v2.mp4",   
"v3.mp4",
"v4.mp4",
"v5.mp4"
];

return (
<section className="py-20 px-6 md:px-20 bg-gray-950">
<h2 className="text-center text-4xl font-bold mb-12">
Explore the Experience
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{images.map((img, i) => (
<motion.img
key={i}
src={`/${img}`}
alt="Gallery"
className="rounded-2xl shadow-lg object-cover h-64 w-full"
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, delay: i * 0.1 }}
/>
))}
{images.length % 3 !== 0 && (
<motion.div
key="empty"
className="h-64 w-full rounded-2xl bg-gray-800"
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, delay: images.length * 0.1 }}
></motion.div>
)}
{video.map((video, i) => (
    <motion.video
key={i}
src={`/${video}`}
alt="Gallery Video"
className="rounded-2xl shadow-lg object-cover h-64 w-full"
muted
autoPlay
loop
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, delay: (images.length + i) * 0.1 }}
/>
))}
</div>
</section>
);
}