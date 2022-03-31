import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';

import { Card, Row, Container, Navbar, Col } from 'react-bootstrap';
import '../dashboard/Dashboard.css';
// This will be the Dashboard Page,
// User will be able to see the the number of their contacts

const API_BASE = 'http://localhost:5000';

/*
    This removes the underline and makes the text blue from the links
    Used below in Forgot Password? and Need an Account?
  */
const navStyle = {
	color: 'blue',

	textDecoration: 'none', // Removing the text-decoration(underline) from the links
	// In Javascript while writing CSS we need to change text-decoration to textDecoration
};
function Dashboard() {
	const { loggedIn, user } = useContext(UserContext);

	const [teacherCount, setTeacherCount] = useState(0);
	const [doctorCount, setDoctorCount] = useState(0);
	const [designerCount, setDesignerCount] = useState(0);
	const [politicianCount, setPoliticianCount] = useState(0);
	const [studentCount, setStudentCount] = useState(0);
	const [businessmanCount, setBusinessmanCount] = useState(0);

	useEffect(() => {
		TeacherCount();
		DoctorCount();
		DesignerCount();
		PoliticianCount();
		StudentCount();
		BusinessmanCount();
	}, []);

	const TeacherCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/teachers`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setTeacherCount(items.Teacher_Count);
	};

	const DoctorCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/doctors`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setDoctorCount(items.Doctor_Count);
	};

	const DesignerCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/designers`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setDesignerCount(items.Designer_Count);
	};

	const PoliticianCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/politicians`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setPoliticianCount(items.Politician_Count);
	};

	const StudentCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/students`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setStudentCount(items.Student_Count);
	};

	const BusinessmanCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/businessmen`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setBusinessmanCount(items.Businessman_Count);
	};

	return (
		<main>
			<section>
				<Navbar className='navbar'>
					{/* <nav>
						<svg
							className='logo'
							width='76'
							height='76'
							viewBox='0 0 76 76'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='-2'
								y='38'
								width='56.5687'
								height='56.5687'
								rx='6'
								transform='rotate(-45 -2 38)'
								fill='#FA949D'
							/>
						</svg>
						<svg
							className='call-icon'
							width='37'
							height='36'
							viewBox='0 0 37 36'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M4.76571 13.9877C8.54134 21.9916 15.26 28.3549 23.6121 31.8029L23.6385 31.8138L25.2521 32.5139C27.3067 33.4052 29.7217 32.7722 31.039 30.9972L33.7311 27.37C33.8955 27.1484 33.8531 26.8403 33.6346 26.6687L28.935 22.9776C28.7013 22.7941 28.3578 22.8368 28.1791 23.0716L26.3499 25.4745C25.9057 26.058 25.1035 26.2608 24.4238 25.9613C18.1785 23.2098 13.16 18.324 10.3336 12.244C10.026 11.5823 10.2343 10.8013 10.8337 10.3688L13.3019 8.58815C13.543 8.41415 13.5869 8.0797 13.3985 7.85225L9.60651 3.27632C9.43027 3.06364 9.11393 3.02233 8.88636 3.18228L5.14035 5.815C3.30507 7.10485 2.65874 9.47574 3.59554 11.4818L4.76445 13.985C4.76487 13.9859 4.76529 13.9868 4.76571 13.9877ZM22.3618 34.6374C13.2866 30.8871 5.98728 23.9709 1.88479 15.2722L1.88231 15.2669L0.710951 12.7585C-0.850367 9.41506 0.226835 5.46356 3.28564 3.31381L7.03164 0.681091C8.62469 -0.438513 10.839 -0.149352 12.0727 1.33938L15.8647 5.91531C17.184 7.50744 16.8767 9.84862 15.1885 11.0666L13.7742 12.087C16.1632 16.5999 19.9496 20.286 24.5851 22.6118L25.6332 21.2349C26.8843 19.5914 29.2892 19.2922 30.9245 20.5767L35.6242 24.2678C37.1539 25.4691 37.4505 27.6257 36.2995 29.1766L33.6075 32.8039C31.4119 35.7622 27.3869 36.8171 23.9625 35.3318L22.3618 34.6374Z'
								fill='#3E1F92'
							/>
						</svg>
					</nav> */}
					<nav>
						<Link className='top-header' to='/'>
							Phonebook
						</Link>
					</nav>
				</Navbar>
				<h1 className='nav-title'>Dashboard</h1>
			</section>
			{/* button container */}
			<Container fluid className='top-container'>
				<nav className='buttons'>
					<Link style={navStyle} className='links' to='/userentry'>
						Add Contacts
					</Link>
				</nav>

				<nav className='buttons'>
					<Link style={navStyle} className='links' to='/searchcontact'>
						Search Contact
					</Link>
				</nav>
			</Container>

			<Container fluid className='bottom-container'>
				<Row className='upper-row1'>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <div>
									<svg
										width='81'
										height='72'
										viewBox='0 0 81 72'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M38.6876 60.8409C39.1658 61.1281 39.6771 61.2551 40.1739 61.249C40.6707 61.2551 41.182 61.1281 41.6602 60.8409L45.9029 58.2928C54.2235 53.2956 64.3997 52.4795 73.4091 56.0867C76.7326 57.4174 80.3478 54.9674 80.3478 51.3844V7.77212C80.3478 5.61018 79.0328 3.66606 77.0275 2.86314C65.4234 -1.78293 52.3166 -0.731715 41.5997 5.7046L40.1739 6.56091L38.7481 5.7046C28.0312 -0.731715 14.9244 -1.78293 3.32035 2.86314C1.31498 3.66606 0 5.61018 0 7.77212V51.3844C0 54.9674 3.61525 57.4174 6.93875 56.0867C15.9482 52.4795 26.1243 53.2956 34.445 58.2928L38.6876 60.8409ZM5.60566 7.99217V50.5866C16.0538 46.6663 27.736 47.7201 37.3291 53.4814L37.3711 53.5066V11.4211L35.864 10.516C26.7119 5.01948 15.5327 4.09053 5.60566 7.99217ZM43.0188 53.4814L42.9767 53.5066V11.4211L44.4838 10.516C53.6359 5.01948 64.8151 4.09053 74.7422 7.99217V50.5866C64.294 46.6663 52.6118 47.7201 43.0188 53.4814Z'
											fill='black'
										/>
										<path
											d='M29.9909 62.3604C22.4275 57.9442 13.075 57.9442 5.51163 62.3604L5.12767 62.5846C3.79058 63.3653 3.33894 65.0832 4.11891 66.4216C4.89889 67.7599 6.61511 68.212 7.95221 67.4313L8.33616 67.2071C14.1541 63.81 21.3484 63.81 27.1664 67.2071L31.2296 69.5796C36.7566 72.8068 43.5912 72.8068 49.1183 69.5796L53.1815 67.2071C58.9994 63.81 66.1937 63.81 72.0117 67.2071L72.3956 67.4313C73.7327 68.212 75.4489 67.7599 76.2289 66.4216C77.0089 65.0832 76.5572 63.3653 75.2201 62.5846L74.8362 62.3604C67.2728 57.9442 57.9203 57.9442 50.3569 62.3604L46.2937 64.7329C42.512 66.941 37.8358 66.941 34.0541 64.7329L29.9909 62.3604Z'
											fill='black'
										/>
									</svg>
								</div> */}
								<Card.Title className='title-name'>Teacher</Card.Title>
								<Card.Subtitle className='profession-number'>
									{teacherCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <svg
									width='72'
									height='72'
									viewBox='0 0 72 72'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M26.4001 33.5998C23.2175 33.5998 20.1653 32.3355 17.9148 30.0851C15.6644 27.8346 14.4001 24.7824 14.4001 21.5998V11.9998C14.4001 11.3633 14.653 10.7528 15.103 10.3027C15.5531 9.85266 16.1636 9.5998 16.8001 9.5998H19.2001C19.8366 9.5998 20.4471 9.34695 20.8972 8.89686C21.3472 8.44677 21.6001 7.83632 21.6001 7.1998C21.6001 6.56328 21.3472 5.95284 20.8972 5.50275C20.4471 5.05266 19.8366 4.7998 19.2001 4.7998H16.8001C14.8905 4.7998 13.0592 5.55837 11.7089 6.90864C10.3587 8.2589 9.6001 10.0902 9.6001 11.9998V21.5998C9.60318 24.3112 10.2644 26.9813 11.5268 29.3808C12.7893 31.7803 14.6153 33.8375 16.8481 35.3758C18.9933 37.2671 20.733 39.5734 21.9622 42.1556C23.1914 44.7378 23.8847 47.5423 24.0001 50.3998C24.0001 54.8554 25.7701 59.1286 28.9207 62.2792C32.0713 65.4298 36.3445 67.1998 40.8001 67.1998C45.2557 67.1998 49.5289 65.4298 52.6795 62.2792C55.8301 59.1286 57.6001 54.8554 57.6001 50.3998V47.6638C59.8625 47.0797 61.8342 45.6905 63.1455 43.7566C64.4569 41.8227 65.018 39.477 64.7236 37.159C64.4292 34.841 63.2995 32.71 61.5463 31.1654C59.793 29.6208 57.5367 28.7686 55.2001 28.7686C52.8635 28.7686 50.6072 29.6208 48.8539 31.1654C47.1007 32.71 45.971 34.841 45.6766 37.159C45.3822 39.477 45.9433 41.8227 47.2547 43.7566C48.566 45.6905 50.5377 47.0797 52.8001 47.6638V50.3998C52.8001 53.5824 51.5358 56.6346 49.2854 58.8851C47.0349 61.1355 43.9827 62.3998 40.8001 62.3998C37.6175 62.3998 34.5653 61.1355 32.3148 58.8851C30.0644 56.6346 28.8001 53.5824 28.8001 50.3998C28.9216 47.5387 29.6223 44.7321 30.8599 42.1497C32.0975 39.5673 33.8461 37.2628 36.0001 35.3758C38.224 33.8322 40.0407 31.7726 41.2946 29.3734C42.5486 26.9743 43.2024 24.3069 43.2001 21.5998V11.9998C43.2001 10.0902 42.4415 8.2589 41.0913 6.90864C39.741 5.55837 37.9097 4.7998 36.0001 4.7998H33.6001C32.9636 4.7998 32.3531 5.05266 31.903 5.50275C31.453 5.95284 31.2001 6.56328 31.2001 7.1998C31.2001 7.83632 31.453 8.44677 31.903 8.89686C32.3531 9.34695 32.9636 9.5998 33.6001 9.5998H36.0001C36.6366 9.5998 37.2471 9.85266 37.6972 10.3027C38.1472 10.7528 38.4001 11.3633 38.4001 11.9998V21.5998C38.4001 23.1757 38.0897 24.7361 37.4867 26.192C36.8836 27.6479 35.9997 28.9708 34.8854 30.0851C33.7711 31.1994 32.4482 32.0833 30.9923 32.6864C29.5364 33.2894 27.976 33.5998 26.4001 33.5998V33.5998ZM55.2001 43.1998C53.9271 43.1998 52.7062 42.6941 51.806 41.7939C50.9058 40.8937 50.4001 39.6728 50.4001 38.3998C50.4001 37.1268 50.9058 35.9059 51.806 35.0057C52.7062 34.1055 53.9271 33.5998 55.2001 33.5998C56.4731 33.5998 57.694 34.1055 58.5942 35.0057C59.4944 35.9059 60.0001 37.1268 60.0001 38.3998C60.0001 39.6728 59.4944 40.8937 58.5942 41.7939C57.694 42.6941 56.4731 43.1998 55.2001 43.1998Z'
										fill='black'
									/>
								</svg> */}

								<Card.Title className='title-name'>Doctor</Card.Title>
								<Card.Subtitle className='profession-number'>
									{doctorCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <div>
									<svg
										width='68'
										height='72'
										viewBox='0 0 68 72'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M48.9062 0.903785C48.3275 0.325101 47.5427 0 46.7243 0C45.9059 0 45.121 0.325101 44.5424 0.903785L6.72225 38.7239C6.33457 39.1116 6.05719 39.5955 5.91863 40.126L1.80435 55.8772C1.5275 56.9371 1.83335 58.0644 2.60796 58.839C3.38258 59.6136 4.50982 59.9195 5.56973 59.6426L21.321 55.5283C21.8514 55.3898 22.3354 55.1124 22.7231 54.7247L60.5432 16.9046C61.7482 15.6996 61.7482 13.7458 60.5432 12.5407L48.9062 0.903785ZM11.6781 42.4957L46.7243 7.44957L53.9974 14.7227L18.9512 49.7688L9.1067 52.3403L11.6781 42.4957Z'
											fill='black'
										/>
										<path
											d='M3.08571 65.8286C1.38152 65.8286 0 67.2101 0 68.9143C0 70.6185 1.38152 72 3.08571 72H64.8C66.5042 72 67.8857 70.6185 67.8857 68.9143C67.8857 67.2101 66.5042 65.8286 64.8 65.8286H3.08571Z'
											fill='black'
										/>
									</svg>
								</div> */}
								<Card.Title className='title-name'>Designer </Card.Title>
								<Card.Subtitle className='profession-number'>
									{designerCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className='upper-row2'>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <div>
									<svg
										width='54'
										height='72'
										viewBox='0 0 54 72'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M18.9995 0.7962C24.1805 -0.2654 29.523 -0.2654 34.704 0.7962C36.945 1.25538 38.6706 3.0492 39.0426 5.30631L39.2304 6.44618C40.8074 16.0146 40.8074 25.7767 39.2304 35.3451L39.0426 36.485C38.6706 38.7421 36.945 40.5359 34.704 40.9951C29.523 42.0567 24.1805 42.0567 18.9995 40.9951C16.7585 40.5359 15.0329 38.7421 14.6609 36.485L14.4731 35.3451C12.8961 25.7767 12.8961 16.0146 14.4731 6.44618L14.6609 5.30631C15.0329 3.04921 16.7585 1.25539 18.9995 0.7962ZM33.6608 5.88747C29.1681 4.96691 24.5354 4.96691 20.0427 5.88747C19.9116 5.91435 19.8106 6.01932 19.7888 6.15142L19.601 7.29128C18.1163 16.3001 18.1163 25.4912 19.601 34.5L19.7888 35.6399C19.8106 35.7719 19.9116 35.8769 20.0427 35.9038C24.5354 36.8244 29.1681 36.8244 33.6608 35.9038C33.792 35.8769 33.8929 35.7719 33.9147 35.6399L34.1026 34.5C35.5873 25.4912 35.5873 16.3001 34.1026 7.29128L33.9147 6.15142C33.8929 6.01932 33.792 5.91435 33.6608 5.88747Z'
											fill='black'
										/>
										<path
											d='M2.23428 30.4493C3.65522 30.2479 4.97033 31.2366 5.17168 32.6575L6.73255 43.6729C7.15428 46.649 9.51345 48.976 12.4951 49.3569C22.0275 50.5745 31.676 50.5745 41.2084 49.3569C44.1901 48.976 46.5493 46.649 46.971 43.6729L48.5319 32.6575C48.7332 31.2366 50.0483 30.2479 51.4693 30.4493C52.8902 30.6506 53.8789 31.9657 53.6775 33.3867L52.1166 44.402C51.3665 49.6956 47.1703 53.8347 41.8669 54.5121C37.7431 55.0388 33.5986 55.3477 29.4504 55.4386V69.4015C29.4504 70.8366 28.287 72 26.8519 72C25.4167 72 24.2533 70.8366 24.2533 69.4015V55.4386C20.1051 55.3477 15.9605 55.0388 11.8366 54.5121C6.53323 53.8347 2.33701 49.6956 1.5869 44.402L0.0260288 33.3867C-0.175318 31.9657 0.813352 30.6506 2.23428 30.4493Z'
											fill='black'
										/>
									</svg>
								</div> */}

								<Card.Title className='title-name'>Politician </Card.Title>
								<Card.Subtitle className='profession-number'>
									{politicianCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <div>
									<svg
										width='85'
										height='72'
										viewBox='0 0 85 72'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M40.6482 0.204106C41.6034 -0.0677363 42.6109 -0.0679855 43.566 0.203062C45.5963 0.779221 47.6453 1.31362 49.7011 1.8498C59.3549 4.36761 69.1593 6.9247 77.882 14.0293L81.8989 17.301C83.5283 18.6281 84.3434 20.5925 84.3441 22.5571V50.018C84.3441 51.643 83.0268 52.9603 81.4019 52.9603C79.7769 52.9603 78.4596 51.643 78.4596 50.018V30.6255L77.8205 31.147C74.798 33.6135 71.6445 35.5287 68.4122 37.0834C68.5666 37.4408 68.6522 37.835 68.6522 38.2491V55.0941C68.6522 59.5399 65.9249 63.5305 61.7826 65.1454L46.0907 71.2631C43.5706 72.2456 40.7735 72.2456 38.2534 71.2631L22.5615 65.1454C18.4193 63.5305 15.6919 59.5399 15.6919 55.0941V38.2491C15.6919 37.8245 15.7819 37.4209 15.9437 37.0564C12.6863 35.4925 9.50823 33.5661 6.46211 31.085L2.4452 27.8133C-0.813455 25.1592 -0.815167 19.9559 2.44067 17.2991L6.52363 13.9673C15.1834 6.90067 24.9185 4.35885 34.5008 1.85694C36.561 1.31902 38.6143 0.78292 40.6482 0.204106ZM78.4596 22.5595C78.4595 22.2061 78.3167 21.9727 78.1828 21.8636L74.1658 18.5919C65.71 12.7497 58.1753 10.173 48.6054 7.65829C46.5011 7.10533 44.3372 6.53671 42.1092 5.90639C39.8712 6.54126 37.6995 7.11261 35.5881 7.66806C26.0949 10.1656 17.823 12.3417 10.244 18.5264L6.16105 21.8582C6.02693 21.9677 5.88433 22.2014 5.88447 22.5548C5.88462 22.9082 6.02739 23.1416 6.16137 23.2507L10.1783 26.5224C17.8215 32.7478 26.1689 34.9413 35.7388 37.456C37.8432 38.009 40.0068 38.5776 42.235 39.2079C44.4727 38.5731 46.6443 38.0018 48.7555 37.4464C58.2487 34.9489 66.5211 32.7726 74.1001 26.5879L78.1831 23.2561C78.3171 23.1467 78.4595 22.9123 78.4596 22.5595ZM49.8433 43.2573C54.1579 42.1308 58.5034 40.9962 62.7677 39.4442V55.0941C62.7677 57.1149 61.528 58.9288 59.6452 59.6629L43.9533 65.7806C42.8078 66.2272 41.5363 66.2272 40.3909 65.7806L24.6989 59.6629C22.8161 58.9288 21.5764 57.1149 21.5764 55.0941V39.4108C25.8869 40.9808 30.2803 42.1267 34.643 43.2645C36.6988 43.8007 38.7478 44.3351 40.7781 44.9112C41.7332 45.1823 42.7407 45.182 43.6959 44.9102C45.7297 44.3314 47.7832 43.7952 49.8433 43.2573Z'
											fill='black'
										/>
									</svg>
								</div> */}
								<Card.Title className='title-name'> Student </Card.Title>
								<Card.Subtitle className='profession-number'>
									{studentCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='profession-card'>
							<Card.Body className='card-body'>
								{/* <div>
									<svg
										width='79'
										height='72'
										viewBox='0 0 79 72'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M19.5242 13.5667V8.66175C19.5242 5.02957 22.1815 1.94394 25.7735 1.40514L30.8886 0.637866C36.5585 -0.212621 42.3236 -0.212622 47.9935 0.637865L53.1086 1.40514C56.7006 1.94394 59.3579 5.02957 59.3579 8.66175V13.5667L66.5449 14.1468C72.0478 14.591 76.5366 18.7343 77.4192 24.1841C79.3697 36.2287 79.3697 48.5087 77.4192 60.5533C76.5366 66.0031 72.0478 70.1464 66.5449 70.5906L58.6959 71.2241C45.8802 72.2586 33.0019 72.2586 20.1861 71.2241L12.3371 70.5906C6.83426 70.1464 2.34546 66.0031 1.46291 60.5533C-0.487636 48.5087 -0.487636 36.2287 1.46291 24.1841C2.34546 18.7343 6.83426 14.591 12.3371 14.1468L19.5242 13.5667ZM31.8216 6.85782C36.873 6.10012 42.0091 6.10012 47.0605 6.85782L52.1756 7.62509C52.6888 7.70207 53.0684 8.14287 53.0684 8.66175V13.1257C43.9909 12.6079 34.8912 12.6079 25.8137 13.1257V8.66175C25.8137 8.14287 26.1933 7.70207 26.7065 7.62509L31.8216 6.85782ZM20.6922 19.7824C33.1711 18.7751 45.7109 18.7751 58.1899 19.7824L66.0389 20.416C68.656 20.6272 70.7908 22.5977 71.2105 25.1895C71.4719 26.8035 71.6962 28.422 71.8834 30.0437C51.4315 40.1145 27.4506 40.1145 6.99865 30.0437C7.18588 28.422 7.41019 26.8035 7.67157 25.1895C8.0913 22.5977 10.2261 20.6272 12.8432 20.416L20.6922 19.7824ZM6.43726 36.736C27.3999 46.2698 51.4822 46.2698 72.4448 36.736C72.8445 44.3512 72.4331 51.9985 71.2105 59.5479C70.7908 62.1397 68.656 64.1102 66.0389 64.3214L58.1899 64.955C45.7109 65.9623 33.1711 65.9623 20.6922 64.955L12.8432 64.3214C10.2261 64.1102 8.0913 62.1397 7.67157 59.5479C6.449 51.9985 6.03756 44.3513 6.43726 36.736Z'
											fill='black'
										/>
									</svg>
								</div> */}
								<Card.Title className='title-name'> Businessmen </Card.Title>
								<Card.Subtitle className='profession-number'>
									{businessmanCount}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</main>
	);
}

export default Dashboard;
