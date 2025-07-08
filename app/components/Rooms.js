import Image from "next/image";
import heroImg from "../public/img4.jpeg";
import Link from "next/link";
import logo from "../public/logogold.png"
import img1 from "../public/img1.jpeg"
import img2 from "../public/img2.jpeg"
import img3 from "../public/img3.jpeg"

const rooms = [
    { title: 'Deluxe Room', image: img1 },
    { title: 'Deluxe Suite', image: img2 },
    { title: 'Royal Suite', image: img3 },
    { title: 'Heritage Suite', image: img2 },
  ]
  
  export default function RoomsGallery() {
    return (
      <section className="bg-[#f2ece4] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-[#5e4b2a]">Raj Vilas Palace</p>
          <h2 className={` text-4xl font-semibold text-[#a8843b] mt-2 mb-4`}>
            Rooms & Suites
          </h2>
          <p className="text-[#555] text-sm max-w-2xl mx-auto">
            Phasellus vitae volutpat donec at felis mauris tincidunt elit vel eu aenean commodo, tincidunt elementum
            et dictum scelerisque tempus amet eget viverra lectus tristique suspendisse tortor feugiat eu lacinia.
          </p>
        </div>
  
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column (2 stacked) */}
          <div className="flex flex-col gap-6">
            {rooms.slice(0, 2).map(({ title, image }, i) => (
              <RoomCard key={i} title={title} image={image} />
            ))}
          </div>
  
          {/* Middle (tall single) */}
          <div className="relative row-span-2 h-[600px]">
            <RoomCard title={rooms[2].title} image={rooms[2].image} full />
          </div>
  
          {/* Right Column (tall single) */}
          <div className="relative row-span-2 h-[600px]">
            <RoomCard title={rooms[3].title} image={rooms[3].image} full />
          </div>
        </div>
      </section>
    )
  }