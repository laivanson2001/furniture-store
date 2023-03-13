import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../../src/assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
	const year = new Date().getFullYear();
	const [trendingProducts, setTrendingProducts] = useState([]);
	const [bestSalesProducts, setBestSalesProducts] = useState([]);
	const [mobileProducts, setMobileProducts] = useState([]);
	const [wirelessProducts, setWirelessProducts] = useState([]);
	const [popularProducts, setPopularProducts] = useState([]);

	useEffect(() => {
		const filteredTrendingProducts = products.filter(
			(item) => item.category === "ghế"
		);
		const filteredBestSalesProducts = products.filter(
			(item) => item.category === "sofa"
		);
		const filteredMobileProducts = products.filter(
			(item) => item.category === "điện thoại"
		);
		const filteredWirelessProducts = products.filter(
			(item) => item.category === "tai nghe"
		);
		const filteredPopularProducts = products.filter(
			(item) => item.category === "đồng hồ"
		);
		setTrendingProducts(filteredTrendingProducts);
		setBestSalesProducts(filteredBestSalesProducts);
		setMobileProducts(filteredMobileProducts);
		setWirelessProducts(filteredWirelessProducts);
		setPopularProducts(filteredPopularProducts);
	}, []);

	return (
		<Helmet title='Trang chủ'>
			<section className='hero__section'>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<div className='hero__content'>
								<p className='hero__subtitle'>
									Sản phẩm xu hướng năm {year}
								</p>
								<h2>
									Khiến Nội Thất Của Bạn Tối Giản & Hiện Đại
									Hơn
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Minus, a consequuntur
									ipsam iste nesciunt suscipit tenetur eius
									quo delectus quos.
								</p>
								<motion.button
									whileTap={{ scale: 1.2 }}
									className='buy__btn'
								>
									<Link to='/shop'>Mua Ngay</Link>
								</motion.button>
							</div>
						</Col>
						<Col lg='6' md='6'>
							<div className='hero__img'>
								<img src={heroImg} alt='' />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<Services />
			<section className='trending__products'>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2 className='section__title'>
								Xu hướng sản phẩm
							</h2>
						</Col>
						<ProductList data={trendingProducts} />
					</Row>
				</Container>
			</section>
			<section className='best__sales'>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2 className='section__title'>Bán chạy nhất</h2>
						</Col>
						<ProductList data={bestSalesProducts} />
					</Row>
				</Container>
			</section>
			<section className='timer__count'>
				<Container>
					<Row>
						<Col lg='6' md='12' className='count__down-col'>
							<div className='clock__top-content text-white'>
								<h4 className='mb-2'>Khuyến mãi giới hạn</h4>
								<h3 className='mb-3'>Số lượng ghế</h3>
							</div>
							<Clock />
							<motion.button
								whileTap={{ scale: 1.2 }}
								className='buy__btn store__btn'
							>
								<Link to=''>Xem Ngay</Link>
							</motion.button>
						</Col>
						<Col lg='6' md='12' className='text-end counter__img'>
							<img src={counterImg} alt='' />
						</Col>
					</Row>
				</Container>
			</section>
			<section className='new__arrivals'>
				<Container>
					<Row>
						<Col lg='12' className='text-center mb-5'>
							<h2 className='section__title'>Hàng mới về</h2>
						</Col>
						<ProductList data={mobileProducts} />
						<ProductList data={wirelessProducts} />
					</Row>
				</Container>
			</section>
			<section className='popolar__category'>
				<Container>
					<Row>
						<Col lg='12' className='text-center mb-5'>
							<h2 className='section__title'>Phổ biến</h2>
						</Col>
						<ProductList data={popularProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Home;
