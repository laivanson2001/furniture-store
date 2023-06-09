import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const nav__link = [
	{
		path: "home",
		display: "Trang chủ",
	},
	{
		path: "shop",
		display: "Shop",
	},
	{
		path: "cart",
		display: "Giỏ hàng",
	},
];

const Header = () => {
	const headerRef = useRef(null);
	const menuRef = useRef(null);

	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				headerRef.current.classList.add("sticky__header");
			} else {
				headerRef.current.classList.remove("sticky__header");
			}
		});
	};

	const menuToggle = () => {
		menuRef.current.classList.toggle("active__menu");
	};

	useEffect(() => {
		stickyHeaderFunc();

		return () => {
			window.removeEventListener("scroll", stickyHeaderFunc);
		};
	});

	return (
		<header className='header' ref={headerRef}>
			<Container>
				<Row>
					<div className='nav__wrapper'>
						<div className='logo'>
							<img src={logo} alt='logo' />
							<div className=''>
								<h1>Atomic Shop</h1>
							</div>
						</div>
						<div
							className='navigation'
							ref={menuRef}
							onClick={menuToggle}
						>
							<ul className='menu'>
								{nav__link.map((item) => (
									<li key={item.path}>
										<NavLink
											to={item.path}
											className={(navClass) =>
												navClass.isActive
													? "nav__active"
													: ""
											}
										>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className='nav__icons'>
							<span className='fav__icon'>
								<i className='ri-heart-line'></i>
								<span className='badge'>1</span>
							</span>
							<span className='cart__icon'>
								<i className='ri-shopping-bag-line'></i>
								<span className='badge'>1</span>
							</span>
							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={userIcon}
									alt=''
								/>
							</span>
							<div className='mobile__menu'>
								<span onClick={menuToggle}>
									<i className='ri-menu-line'></i>
								</span>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
