import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Oop !!</h1>
      Tumhari maa ki chut
    </div>
  )
}

export default Error