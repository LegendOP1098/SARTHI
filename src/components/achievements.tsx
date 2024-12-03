
export const Achievements= () => {
  const data=[
    {
      value:7,
      suffix:"+",
      name:"states",
      isrc:"https://i.ibb.co/7kpy0YH/mapNew.png",
    },
    {
      value:7,
      suffix:"+",
      name:"states",
      isrc:"https://i.ibb.co/7kpy0YH/mapNew.png",
    },
  ]

  return (
    <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://i.ibb.co/7kpy0YH/mapNew.png"
          alt="States"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600">7+</h2>
        <p className="text-gray-700">states</p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://i.ibb.co/ctKYqc9/people-New.png"
          alt="People Sensitised"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600">100,000+</h2>
        <p className="text-gray-700">people sensitised</p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://i.ibb.co/98Vwx86/education-New.png"
          alt="Children Educated"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600">250+</h2>
        <p className="text-gray-700">children educated</p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://i.ibb.co/YcQJ7XF/sanitary-New.pn"alt="Sanitary Products"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600">1,500+</h2>
        <p className="text-gray-700">sanitary products distributed</p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://i.ibb.co/x11TFDW/school-New.png"
          alt="Schools"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600">2+</h2>
        <p className="text-gray-700">Sushiksha schools</p>
      </div>
    </div>
  )
}