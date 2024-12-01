// import { Carousel, Button } from 'react-bootstrap'
// import { Link } from 'react-router'

// export default function HomePage() {
//   const carouselItems = [
//     {
//       src: 'img/carousel-1.jpg',
//       alt: 'Organic Vegetables',
//       title: 'Organic Vegetables',
//       subtitle: 'Organic Vegetables For Healthy Life',
//       buttons: [
//         { text: 'Explore', variant: 'primary', href: '' },
//         { text: 'Contact', variant: 'secondary', href: '' }
//       ]
//     },
//     {
//       src: 'img/carousel-2.jpg',
//       alt: 'Organic Fruits',
//       title: 'Organic Fruits',
//       subtitle: 'Organic Fruits For Better Health',
//       buttons: [
//         { text: 'Explore', variant: 'primary', to: '' },
//         { text: 'Contact', variant: 'secondary', to: '/contact' }
//       ]
//     }
//   ]

//   return (
//     <div className='container-fluid p-0'>
//       <Carousel fade id='header-carousel'>
//         {carouselItems.map((item, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className='d-block w-100 carousel-image'
//               src={item.src}
//               alt={item.alt}
//             />
//             <Carousel.Caption className='carousel-caption-bg'>
//               <div className='text-start p-5' style={{ maxWidth: '900px' }}>
//                 <h3 className='text-white'>{item.title}</h3>
//                 <h1 className='display-1 text-white mb-md-4'>
//                   {item.subtitle}
//                 </h1>
//                 {item.buttons.map((button, btnIndex) => (
//                   <Button
//                     key={btnIndex}
//                     variant={button.variant}
//                     size='lg'
//                     as={Link}
//                     className='py-md-3 px-md-5 me-3'
//                     to={button.to}
//                   >
//                     {button.text}
//                   </Button>
//                 ))}
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   )
// }

import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router' // Corrected to react-router-dom

export default function HomePage() {
  const carouselItems = [
    {
      src: 'img/carousel-1.jpg',
      alt: 'Organic Vegetables',
      title: 'Organic Vegetables',
      subtitle: 'Organic Vegetables For Healthy Life',
      buttons: [
        { text: 'Explore', variant: 'primary', to: '/explore' },
        { text: 'Contact', variant: 'secondary', to: '/contact' }
      ]
    },
    {
      src: 'img/carousel-2.jpg',
      alt: 'Organic Fruits',
      title: 'Organic Fruits',
      subtitle: 'Organic Fruits For Better Health',
      buttons: [
        { text: 'Explore', variant: 'primary', to: '/explore' },
        { text: 'Contact', variant: 'secondary', to: '/contact' }
      ]
    }
  ]

  return (
    <div className='container-fluid p-0'>
      <Carousel fade id='header-carousel'>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100 carousel-image'
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption className='carousel-caption-bg'>
              <div className='text-center p-4' style={{ maxWidth: '700px' }}>
                <h3 className='fs-4 text-white mb-3'>{item.title}</h3>
                <h1 className='display-5 text-white mb-4'>{item.subtitle}</h1>
                {item.buttons.map((button, btnIndex) => (
                  <Button
                    key={btnIndex}
                    variant={button.variant}
                    size='md'
                    as={Link}
                    className='me-2'
                    to={button.to}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
