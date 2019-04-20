import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
	categoriaRef = React.createRef();

	cambiarCategoria = (e) => {
		e.preventDefault();

		this.props.consultarNoticias(this.categoriaRef.current.value);
	};

	render() {
		return (
			<div className="buscador row">
				<div className="col s12 m8 offset-m2">
					<form onSubmit={this.cambiarCategoria}>
						<h2>News by category</h2>
						<div className="input-field col s12 m8">
							<select ref={this.categoriaRef}>
								<option value="general" defaultValue>
									General
								</option>
								<option value="businnes" defaultValue>
									Business
								</option>
								<option value="entertainment" defaultValue>
									Entertainment
								</option>
								<option value="health" defaultValue>
									Health
								</option>{' '}
								<option value="science" defaultValue>
									Science
								</option>{' '}
								<option value="sports" defaultValue>
									Sports
								</option>{' '}
								<option value="technology" defaultValue>
									Technology
								</option>
							</select>
						</div>
						<div className="input-field col s12 m4 enviar">
							<input type="submit" className="btn amber darken-2" value="Search" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Formulario.propTypes = {
	consultarNoticias: PropTypes.func.isRequired
};
export default Formulario;
