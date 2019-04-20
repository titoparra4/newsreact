import React, { Component } from 'react';
import Header from './Componentes/Header';
import Noticias from './Componentes/Noticias';
import Formulario from './Componentes/Formulario';

class App extends Component {
	state = {
		noticias: []
	};

	componentDidMount() {
		this.consultarNoticias();
	}

	consultarNoticias = (categoria = 'general') => {
		let url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=a4c671e5d98e415fa1eb28bcafb44b50`;

		fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((noticias) => {
				this.setState({
					noticias: noticias.articles
				});
			});
	};

	render() {
		return (
			<div className="contenedor-app">
				<Header titulo="News" />
				<div className="container white contenedor-noticias">
					<Formulario consultarNoticias={this.consultarNoticias} />
					<Noticias noticias={this.state.noticias} />
				</div>
			</div>
		);
	}
}

export default App;
