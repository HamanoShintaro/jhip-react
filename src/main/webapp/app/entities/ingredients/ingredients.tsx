import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './ingredients.reducer';
import { IIngredients } from 'app/shared/model/ingredients.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IIngredientsProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Ingredients extends React.Component<IIngredientsProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { ingredientsList, match } = this.props;
    return (
      <div>
        <h2 id="ingredients-heading">
          <Translate contentKey="jwNagai20190823App.ingredients.home.title">Ingredients</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jwNagai20190823App.ingredients.home.createLabel">Create new Ingredients</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.year">Year</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.month">Month</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.date">Date</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.images">Images</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.cuisineName">Cuisine Name</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.cuisineDescription">Cuisine Description</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.cuisineImages">Cuisine Images</Translate>
                </th>
                <th>
                  <Translate contentKey="jwNagai20190823App.ingredients.language">Language</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {ingredientsList.map((ingredients, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${ingredients.id}`} color="link" size="sm">
                      {ingredients.id}
                    </Button>
                  </td>
                  <td>{ingredients.year}</td>
                  <td>{ingredients.month}</td>
                  <td>{ingredients.date}</td>
                  <td>{ingredients.name}</td>
                  <td>{ingredients.description}</td>
                  <td>{ingredients.images}</td>
                  <td>{ingredients.cuisineName}</td>
                  <td>{ingredients.cuisineDescription}</td>
                  <td>{ingredients.cuisineImages}</td>
                  <td>
                    <Translate contentKey={`jwNagai20190823App.Language.${ingredients.language}`} />
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${ingredients.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${ingredients.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${ingredients.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ingredients }: IRootState) => ({
  ingredientsList: ingredients.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ingredients);
