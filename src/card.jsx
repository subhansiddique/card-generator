import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas';

const Students = [
    {
        name: "John Doe",
        rollNo: "123",
        image: "https://th.bing.com/th/id/OIP.qA5FFIWsFfaoDLpudPwbgAHaLG?rs=1&pid=ImgDetMain",
      },
      {
        name: "Jane Smith",
        rollNo: "456",
        image: "https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain",
      },
      {
        name: "Alice Johnson",
        rollNo: "789",
        image: "https://th.bing.com/th/id/OIP.Z82mVWbkWWksHH7ybNBUIwHaLJ?rs=1&pid=ImgDetMain",
      },
      {
        name: "Michel",
        rollNo: "0052",
        image: "https://www.bing.com/images/search?view=detailV2&ccid=2LSnoBK7&id=3C6B07492713BC7C96B21C26157AE05ED2C0FB7A&thid=OIP.2LSnoBK7KBtbtHzA9CHJnQHaLJ&mediaurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fafrican-american-man-blank-expression-his-s-30569365.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.d8b4a7a012bb281b5bb47cc0f421c99d%3Frik%3DevvA0l7gehUmHA%26pid%3DImgRaw%26r%3D0&exph=900&expw=598&q=images+of+usa+people+mens&simid=608038387817582620&form=IRPRST&ck=1EFBC6E7F6CEEDF3FDF79224FC27E46A&selectedindex=2&itb=0&cw=1145&ch=815&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_Z82mVWbk*cp_7915BD82F5D022548962970C9A14905C*mid_E686D505AB8066CB9DB6514FDABDE7DFC1D609C6*simid_608005015906498428*thid_OIP.Z82mVWbkWWksHH7ybNBUIwHaLJ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0",
      },
      {
        name: " Smith",
        rollNo: "952",
        image: "https://th.bing.com/th/id/OIP.75ZmliZlJafydFAWWJBLfQAAAA?rs=1&pid=ImgDetMain",
      },
      {
        name: "Kelvin",
        rollNo: "225",
        image: "https://th.bing.com/th/id/OIP.QiQnreBAvVGTN_gy6H23ogHaHe?w=1056&h=1066&rs=1&pid=ImgDetMain",
      },
      {
        name: " Doe",
        rollNo: "665",
        image: "https://th.bing.com/th/id/OIP.cEjY5VQwcH5OmFicRVwoswHaLH?rs=1&pid=ImgDetMain",
      },
      {
        name: "Alex",
        rollNo: "3168",
        image: "https://th.bing.com/th/id/R.67ff30a10e3ceff4ded895731f3af982?rik=PZVmCOpq7NfvUw&pid=ImgRaw&r=0",
      },
      {
        name: "Nelson",
        rollNo: "7965",
        image: "https://th.bing.com/th/id/OIP.1Ha89oNFhB55l1TfdvMv4AAAAA?w=236&h=299&rs=1&pid=ImgDetMain",
      },
]

function Card() {

const [currentIndex,setCurrentIndex] = useState(0);
const cardRef = useRef(null);

const next = ()=>{
    setCurrentIndex((e) => {
      console.log("🚀 ~ next ~ e:", e)
      return (e + 1) % Students.length
    })
}

const previous = () => {
    setCurrentIndex((e) =>
      e === 0 ? Students.length - 1 : e - 1
    );
  };
  const handleDownload = () => {
    if (cardRef.current) {
        html2canvas(cardRef.current).then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `${profiles[currentIndex].name}-profile-card.png`;
          link.click();
        });
      }
  };





  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-200">
      <h1 className='pb-11 text-4xl font-semibold'>Card</h1>

    <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <img
          src={Students[currentIndex].image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold mb-2">{Students[currentIndex].name}</h2>
        <p className="text-gray-600 mb-4">{Students[currentIndex].rollNo}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={previous}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Next
          </button>
          <button
            onClick={handleDownload}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
