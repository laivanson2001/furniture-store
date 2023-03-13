import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./footer.css";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col lg='4' md='6' className='mb-4'>
						<div className='logo'>
							<img src={logo} alt='logo' />
							<div>
								<h1 className='text-white'>DT-Shop</h1>
							</div>
						</div>
						<p className='footer__text mt-4'>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Doloribus eveniet rem nisi est distinctio
							perferendis voluptatem itaque ut dolorem sint?
						</p>
					</Col>
					<Col lg='3' md='3' className='mb-4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-title'>
								Danh mục hàng đầu
							</h4>
							<ListGroup>
								<ListGroupItem className='ps-0 border-0'>
									<Link to=''>Điện thoại</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to=''>Sofa</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to=''>Ghế</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to=''>Đồng hồ</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg='2' md='3' className='mb-4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-title'>
								Liên kết nhanh
							</h4>
							<ListGroup>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/shop'>Cửa hàng</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/cart'>Shop</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to='/login'>Đăng nhập</Link>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0'>
									<Link to=''>Chính sách & bảo mật</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg='3' md='4'>
						<div className='footer__quick-links'>
							<h4 className='quick__links-title'>Liên hệ</h4>
							<ListGroup className='footer__contact'>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-map-pin-line'></i>
									</span>
									<p>Số 1 Lĩnh Nam, Hoàng Mai, Hà Nội</p>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-phone-line'></i>
									</span>
									<p>0123456789</p>
								</ListGroupItem>
								<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
									<span>
										<i className='ri-mail-line'></i>
									</span>
									<p>example@gmail.com</p>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg='12'>
						<p className='footer__copyright'>
							&copy; Copyright {year} developed by Atomic. All
							rights revered.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
