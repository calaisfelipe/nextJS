import React from 'react'
import Dialog from '@/components/Dialog'
import Link from 'next/link'

const ProductPage = () => {

  async function onClose() {
    "use server"
    console.log('modal has closed')
    
  }

  async function onOk() {
    "use server"
    console.log('ok was clicked')
    
  }


  return (
    <>
    <Dialog title='teste' onClose={onClose} onOk={onOk} >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, repellendus voluptates. Inventore fugiat veniam nulla nihil iure et quos quibusdam vel suscipit illum, sapiente ab est cupiditate, qui dicta aliquid.</p>
    </Dialog>

    <Link href='/'>Go to home</Link>

    <div className='flex flex-col gap-2'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit cumque perspiciatis sit ea, est tempora veritatis veniam sed nobis, eveniet tempore distinctio accusamus aliquid quisquam dolores illo repellendus voluptate.</p>
       <p>Ullam unde itaque aspernatur totam possimus voluptas vero hic quis similique. Vitae minima aliquam quod sunt, deserunt culpa! In sint asperiores labore blanditiis aliquam quis, quibusdam atque a accusantium non.</p>
       <p>Debitis accusantium cumque necessitatibus numquam saepe a voluptatem animi modi quae nihil eius hic rem, nam reprehenderit consequuntur beatae maxime deserunt velit blanditiis sint, vero, sed explicabo minima magni. Quo?</p>
       <p>Earum, recusandae, sequi numquam accusantium temporibus sit iusto officiis mollitia soluta illo, quae quibusdam repellendus. Commodi, tempore. Temporibus distinctio sunt, cum, non assumenda illum ratione, optio deserunt amet excepturi dolor!</p>
       <p>Mollitia, illo voluptatibus amet perferendis magnam aut natus rerum tempora optio est sit voluptates alias similique dolorum distinctio reprehenderit reiciendis incidunt doloribus adipisci deserunt! Adipisci non animi modi eius provident.</p>
       <p>Placeat, labore necessitatibus voluptatibus sint at quae. Perferendis delectus suscipit et voluptate, ipsam repellat quis quas earum. Officiis maxime aliquam aut autem ratione? Cum esse reiciendis molestiae distinctio debitis animi!</p>

    </div>
    </>
  )
}

export default ProductPage