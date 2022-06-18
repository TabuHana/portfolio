import { resume } from "../assests/nathanielMResume.pdf";

const Resume = () => {


  return (
    <div>
      <iframe src={resume} title="resume"></iframe>
    </div>
  )
}

export default Resume