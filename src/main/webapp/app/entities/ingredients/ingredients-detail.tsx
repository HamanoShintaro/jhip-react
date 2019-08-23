import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './ingredients.reducer';
import { IIngredients } from 'app/shared/model/ingredients.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IIngredientsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class IngredientsDetail extends React.Component<IIngredientsDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { ingredientsEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jwNagai20190823App.ingredients.detail.title">Ingredients</Translate> [<b>{ingredientsEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="year">
                <Translate contentKey="jwNagai20190823App.ingredients.year">Year</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.year}</dd>
            <dt>
              <span id="month">
                <Translate contentKey="jwNagai20190823App.ingredients.month">Month</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.month}</dd>
            <dt>
              <span id="date">
                <Translate contentKey="jwNagai20190823App.ingredients.date">Date</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.date}</dd>
            <dt>
              <span id="name">
                <Translate contentKey="jwNagai20190823App.ingredients.name">Name</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.name}</dd>
            <dt>
              <span id="description">
                <Translate contentKey="jwNagai20190823App.ingredients.description">Description</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.description}</dd>
            <dt>
              <span id="images">
                <Translate contentKey="jwNagai20190823App.ingredients.images">Images</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.images}</dd>
            <dt>
              <span id="cuisineName">
                <Translate contentKey="jwNagai20190823App.ingredients.cuisineName">Cuisine Name</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.cuisineName}</dd>
            <dt>
              <span id="cuisineDescription">
                <Translate contentKey="jwNagai20190823App.ingredients.cuisineDescription">Cuisine Description</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.cuisineDescription}</dd>
            <dt>
              <span id="cuisineImages">
                <Translate contentKey="jwNagai20190823App.ingredients.cuisineImages">Cuisine Images</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.cuisineImages}</dd>
            <dt>
              <span id="language">
                <Translate contentKey="jwNagai20190823App.ingredients.language">Language</Translate>
              </span>
            </dt>
            <dd>{ingredientsEntity.language}</dd>
          </dl>
          <Button tag={Link} to="/entity/ingredients" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/ingredients/${ingredientsEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ ingredients }: IRootState) => ({
  ingredientsEntity: ingredients.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsDetail);
