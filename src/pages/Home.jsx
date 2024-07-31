import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../componants/Header'
import Footer from '../componants/Footer';

const Home = () => {
  return (
    <div>
      <Header bgColor="purple-100" titleColor="black" title="Home"/>
      <div className='py-[80px] text-xl px-[180px] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa corrupti atque similique, a inventore? Autem corrupti repudiandae cum perferendis laboriosam assumenda odio inventore quasi rem eos sapiente placeat neque provident labore maiores ipsa iusto quibusdam facilis, maxime quod molestiae laborum porro perspiciatis dicta? Nisi optio dolorem facere voluptates fugiat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae corrupti repellat autem quaerat eveniet vel saepe accusantium rem necessitatibus perferendis aliquam quia odio, dolores, assumenda ut atque dignissimos maiores deserunt iste sapiente dolorum sit unde nobis? Incidunt ullam, neque porro quaerat nemo, iste ad quibusdam aliquid distinctio nobis nam? Eveniet harum quam eum excepturi ratione nemo molestias obcaecati. Corrupti aperiam unde nihil tenetur, provident possimus dignissimos voluptatibus nostrum exercitationem velit nulla, animi voluptate explicabo maiores deserunt pariatur iste obcaecati itaque voluptas eveniet neque sit temporibus distinctio! Dolorem excepturi minus cum laboriosam optio? Debitis, ipsum eaque quaerat deleniti quae hic doloremque fugit fuga eos repudiandae non dignissimos odit quisquam molestiae possimus asperiores, laboriosam dolores quia quos sit earum aliquam assumenda dolorum sequi. Minima ipsam impedit eius quasi quia quisquam dicta perspiciatis laborum necessitatibus itaque, enim dolorum minus temporibus cumque adipisci sint tenetur? Reiciendis dolores molestiae, odit mollitia eum saepe cum dolorum odio explicabo, repudiandae nemo. Est ex accusantium iste cupiditate illum autem eos quidem consequatur laborum reprehenderit alias dolorum similique assumenda ipsum quaerat dolorem magni quas deserunt facilis, perspiciatis numquam! Enim architecto error unde magni consequatur natus expedita earum odio impedit quas voluptatum delectus voluptatibus eius exercitationem, consequuntur tempore sit!
      </div>
      <Footer />
    </div>
  )
}

export default Home