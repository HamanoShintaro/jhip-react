import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './ingredients.reducer';
import { IIngredients } from 'app/shared/model/ingredients.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IIngredientsUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IIngredientsUpdateState {
  isNew: boolean;
}

export class IngredientsUpdate extends React.Component<IIngredientsUpdateProps, IIngredientsUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { ingredientsEntity } = this.props;
      const entity = {
        ...ingredientsEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/ingredients');
  };

  render() {
    const { ingredientsEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jwNagai20190823App.ingredients.home.createOrEditLabel">
              <Translate contentKey="jwNagai20190823App.ingredients.home.createOrEditLabel">Create or edit a Ingredients</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : ingredientsEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="ingredients-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="yearLabel" for="year">
                    <Translate contentKey="jwNagai20190823App.ingredients.year">Year</Translate>
                  </Label>
                  <AvField id="ingredients-year" type="string" className="form-control" name="year" />
                </AvGroup>
                <AvGroup>
                  <Label id="monthLabel" for="month">
                    <Translate contentKey="jwNagai20190823App.ingredients.month">Month</Translate>
                  </Label>
                  <AvField id="ingredients-month" type="string" className="form-control" name="month" />
                </AvGroup>
                <AvGroup>
                  <Label id="dateLabel" for="date">
                    <Translate contentKey="jwNagai20190823App.ingredients.date">Date</Translate>
                  </Label>
                  <AvField id="ingredients-date" type="string" className="form-control" name="date" />
                </AvGroup>
                <AvGroup>
                  <Label id="nameLabel" for="name">
                    <Translate contentKey="jwNagai20190823App.ingredients.name">Name</Translate>
                  </Label>
                  <AvField id="ingredients-name" type="text" name="name" />
                </AvGroup>
                <AvGroup>
                  <Label id="descriptionLabel" for="description">
                    <Translate contentKey="jwNagai20190823App.ingredients.description">Description</Translate>
                  </Label>
                  <AvField id="ingredients-description" type="text" name="description" />
                </AvGroup>
                <AvGroup>
                  <Label id="imagesLabel" for="images">
                    <Translate contentKey="jwNagai20190823App.ingredients.images">Images</Translate>
                  </Label>
                  <AvField id="ingredients-images" type="text" name="images" />
                </AvGroup>
                <AvGroup>
                  <Label id="cuisineNameLabel" for="cuisineName">
                    <Translate contentKey="jwNagai20190823App.ingredients.cuisineName">Cuisine Name</Translate>
                  </Label>
                  <AvField id="ingredients-cuisineName" type="text" name="cuisineName" />
                </AvGroup>
                <AvGroup>
                  <Label id="cuisineDescriptionLabel" for="cuisineDescription">
                    <Translate contentKey="jwNagai20190823App.ingredients.cuisineDescription">Cuisine Description</Translate>
                  </Label>
                  <AvField id="ingredients-cuisineDescription" type="text" name="cuisineDescription" />
                </AvGroup>
                <AvGroup>
                  <Label id="cuisineImagesLabel" for="cuisineImages">
                    <Translate contentKey="jwNagai20190823App.ingredients.cuisineImages">Cuisine Images</Translate>
                  </Label>
                  <AvField id="ingredients-cuisineImages" type="text" name="cuisineImages" />
                </AvGroup>
                <AvGroup>
                  <Label id="languageLabel">
                    <Translate contentKey="jwNagai20190823App.ingredients.language">Language</Translate>
                  </Label>
                  <AvInput
                    id="ingredients-language"
                    type="select"
                    className="form-control"
                    name="language"
                    value={(!isNew && ingredientsEntity.language) || 'ENGLISH'}
                  >
                    <option value="ENGLISH">
                      <Translate contentKey="jwNagai20190823App.Language.ENGLISH" />
                    </option>
                    <option value="JAPANESE">
                      <Translate contentKey="jwNagai20190823App.Language.JAPANESE" />
                    </option>
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/ingredients" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  ingredientsEntity: storeState.ingredients.entity,
  loading: storeState.ingredients.loading,
  updating: storeState.ingredients.updating,
  updateSuccess: storeState.ingredients.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsUpdate);
