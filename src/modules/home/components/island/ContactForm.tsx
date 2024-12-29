import ContactField from "@home/components/island/ContactField.tsx";
import {Textarea} from "@core/components/ui/textarea.tsx";
import {Label} from "@core/components/ui/label.tsx";
import {Button} from "@core/components/ui/button.tsx";
import SendIcon from "@core/assets/react-svg/SendIcon.tsx";
import {useRef} from "react";
import emailjs from 'emailjs-com';

interface Props{
    lang: string;
}

export default function ContactForm({lang}: Props){

    const name = lang === "en" ? "Name" : "Nombre";
    const phone = lang === "en" ? "Cell Phone" : "Celular";
    const message = lang === "en" ? "Message" : "Mensaje";
    const send = lang === "en" ? "Send Message" : "Enviar Mensaje";

    const ref = useRef(null);

    return(
        <form className='grid grid-cols-2 gap-5' ref={ref}
              onSubmit={(e)=> {
                  e.preventDefault();
                  if(!ref.current) return;
                  const formData = new FormData(ref.current);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const phone = formData.get('phone');
                  const message = formData.get('message');

                  const serviceId = 'service_jy48o3t';
                  const templateId = 'template_u9n4o8n';
                  const userId = 'RCCFWDFLyP62T-PB7'
                  emailjs.send(serviceId, templateId, {
                      message: message,
                      reply_to: email,
                      from_name: name,
                      phone_number: phone,
                  }, userId)
                      .then((res)=> {
                          console.log(res);
                      })
                      .catch((err) => {
                          console.log(err);
                      })
              }}>
            <ContactField id='name' label={name} required className='col-span-2' />
            <ContactField id='email' label="Email" type='email' required />
            <ContactField id='phone' label={phone} type='phone' />
            <div className='col-span-2'>
                <Label htmlFor='message'>{message}</Label>
                <Textarea name='message' id='message'
                    className='outline-none shadow-none border-0 border-b-2 rounded-none h-6 focus-visible:ring-0' />
            </div>
            <Button className='col-span-2 flex items-center justify-center gap-x-2'>
                <span className='font-semibold'>{send}</span>
                <figure className='w-4 h-4 text-white'>
                    <SendIcon/>
                </figure>
            </Button>
        </form>
    )
}