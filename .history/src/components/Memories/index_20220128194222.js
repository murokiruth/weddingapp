import { React } from 'react';
import { MemCont } from './MemoriesElements';
// import { SliderImgData } from './SliderImgData.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Memories.css';
import { render } from 'react-dom';
// import Image1 from '../../images/beach.jpg';
// import Image2 from '../../images/proposal1.jpg';
// import Image3 from '../../images/sidsonnieLake.jpg';
// import Image4 from '../../images/redrosesbackground.jpg';


const Memories = () => {
	state = {
		items: [
			{ id: 1, url: '../../images/beach.jpg' },
			{ id: 2, url: '../../images/beach.jpg' },
			{ id: 3, url: '../../images/beach.jpg' },
		],
	}

	render(){
		const { items } = this.state;

		return (
			<MemCont id='memories'>
				<AliceCarousel>
					{items.map((items) => (
						<div key={items.id} alt='pic'>
							{items.url}
						</div>
					))}
				</AliceCarousel>
				{/* <AliceCarousel items={items}>
					<Image src={Image1} alt='pic' />
					<Image src={Image2} alt='pic' />
					<Image src={Image3} alt='pic' />
					<Image src={Image4} alt='pic' />
				</AliceCarousel> */}
	
				{/* <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
				<FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} /> */}
				{/* {SliderImgData.map((slide, index) => {
					return (
						<div className={index === current ? 'slide active' : 'slide'} key={index}>
							{index === current && <img src={slide.imageUrl} alt={slide.alt} className='image' />}
						</div>
					);
				})} */}
			</MemCont>
		);
	}
	
};

export default Memories;
