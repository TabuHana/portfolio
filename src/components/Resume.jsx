import resume from "../assests/nathanielMResume.pdf";

const Resume = () => {


  return (
    <div>
      <iframe className="w-full h-[1100px] bg-[#333] overflow-hidden" name='resume' src={resume} title="resume"></iframe>
    </div>
  )
}

export default Resume