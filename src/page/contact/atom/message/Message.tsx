import  {SyntheticEvent} from 'react';
import messageStyele from "./message.module.scss";

function Message() {


const handleSubmite=(even:SyntheticEvent)=>{
even.preventDefault();
even.stopPropagation(); 

  const target = even.target as typeof even.target & {

      name: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };


const ob={
  name: target.name.value,
  email: target.email.value,
  subject: target.subject.value,
  message: target.message.value

}

console.log(ob);




}


  return (
   <form  onSubmit={handleSubmite} method="get" className={messageStyele.message}>

  <div className={messageStyele.form}>
    <label htmlFor="name">Your name </label>
    <input type="text" name="name" id="name" placeholder="doudou" required />
  </div>

  <div className={messageStyele.form}>
    <label htmlFor="email">Email address </label>
    <input type="email" name="email" id="email" placeholder="Abc@def.com" required />
  </div>


  <div className={messageStyele.form}>
    <label htmlFor="subject">Subject</label>
    <input type="text" name="subject" id="subject" placeholder="This is an optional" required />
  </div>


   <div className={messageStyele.text}>
    <label htmlFor="Message">Message</label>
    <textarea maxLength={100} autoComplete="off" autoCapitalize="sentences" name="message" id="message" placeholder="Hi! i’d like to ask about"></textarea>
  </div>

  <div className={messageStyele.btn}>
    <button type="submit">Submit</button>
  </div>

</form>

  )
}

export default Message