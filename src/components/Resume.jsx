import resume from "../assests/nathanielMResume.pdf";
import resume2 from '../assests/Nathaniel_Marcellous_Resume.pdf'

const Resume = () => {


  return (
    <div>
      <iframe className="w-full h-[1100px] bg-[#333] overflow-hidden" name='resume' src={resume2} title="resume"></iframe>
    </div>
  )
}

export default Resume