import {useState} from "react";
export default function Textarea() {
    const [feedback, setFeedback] = useState<string>("");
    const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("gia tri o text area", event.target.value);
        setFeedback(event.target.value);
    };
  return (
    <div>Textarea
        <textarea onChange = {handleChange} name="" id="">

        </textarea>
    </div>
  )
}
