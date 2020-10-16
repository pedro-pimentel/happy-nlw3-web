import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import logoimg from '../images/Logo.svg';
import mapIcon from '../ultis/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	console.log(orphanages);
	useEffect(() => {
		api.get('orphanages').then(response => {
			setOrphanages(response.data);
		});
	}, []);

	return (
		<div id="page-map">
			<aside>
				<header>
					<Link to="/">
						<img src={logoimg} alt="happy" />
					</Link>
					{/* <img src={mapMarkerImg} alt="happy" /> */}

					<h2>Escolha um orfanato no mapa</h2>

					<p>Muitas crianças estão esperando a sua visita</p>
				</header>

				<footer>
					<strong>Santarém</strong>
					<span>Pará</span>
				</footer>
			</aside>
			<Map 
				center={[-2.4480533,-54.7257689]}
				zoom={13.5}
				style={{ width: '100%', height: '100%' }}
			>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>

				{orphanages.map(orphanage => {
					return (
						<Marker
							key={orphanage.id}
							icon={mapIcon}
							position={[orphanage.latitude, orphanage.longitude]}
						>
							<Popup closeButton={false} minwidth={240} maxWidth={240} className="map-popup">
								{orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#FFF" />
								</Link>
							</Popup>
						</Marker>
					)
				})}
			</Map>

			<Link to="/orphanage/create" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>

		</div>
	);
}

export default OrphanagesMap;