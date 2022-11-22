import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Buttons/Button";

import styles from "./gridViev.module.scss";

const GridViev = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inside}>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/medal_lechowicz_2022/18.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Uroczystość Chrystusa Króla oraz odznaczenie medalem Dei Regno Servire, Ludwika Lechowicza.
						</h4>
						<h4>Tarnów 20 XI 2022</h4>
					</div>
					<Link to="/medal-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/forum_rad_2022/5.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Forum Parafialnych Rad Duszpasterskich.</h4>
						<h4>Tarnów 19 XI 2022.</h4>
					</div>
					<Link to="/forum-rad-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/grono_lektorow_2022/13.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Przyjęcie kandydatów do Grona Lektorów.</h4>
						<h4>Szczepanów 19 XI 2022.</h4>
					</div>
					<Link to="/lektorzy-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/koncert_partiotyczny_2022/36.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>
							Koncert Patriotyczny w wykonaniu Młodzieżowej Orkiestry: CRUSHED SOUNDS BIG BAND pod
							dyrekcją Pawła Swoszowskiego - 24.10.2022r.
						</h4>
					</div>
					<Link to="/koncert-2022">
						<Button name="zobacz" />
					</Link>
				</div>
				<div className={styles.element}>
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(images/fatima_2022/75.jpg)`,
						}}
					></div>
					<div className={styles.info}>
						<h4>Zakończenie Nabożeństw Fatimskich. Mokrzyska 13.10.2022r.</h4>
					</div>
					<Link to="/fatima-2022">
						<Button name="zobacz" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GridViev;
