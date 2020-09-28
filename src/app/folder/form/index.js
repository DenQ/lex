import React from 'react';
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import urlManager from 'common/utils/url-manager';

import { submitHandler } from './utils';
import { fieldNames } from './constants';
import InputControl from './components/input-control';

const initialValues = {
  [fieldNames.ID]: null,
  [fieldNames.NAME]: '',
  [fieldNames.DESCRIPTION]: '',
};

const EntityForm = ({
  initialValues,
  readOnly,
}) => {
    const history = useHistory();
    const validate = () => {};

    const onSuccessSubmit = () => {
      history.push(urlManager.folders());
    }

    return (
      <Form
        onSubmit={submitHandler({ onSuccessSubmit })}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>ID</label>
              <InputControl fieldName={fieldNames.ID} placeholder="NEW"  readOnly={readOnly} disabled />
            </div>

            <div>
              <label>Name Folder</label>
              <InputControl fieldName={fieldNames.NAME} placeholder="Folder Name" readOnly={readOnly} />
            </div>

            <div>
              <label>Description Folder</label>
              <InputControl fieldName={fieldNames.DESCRIPTION} placeholder="Description" readOnly={readOnly} />
            </div>

            {!readOnly && (
              <button type="submit">Save</button>
            )}
          </form>
        )}
      />
    );
}


EntityForm.propTypes = {
  initialValues: PropTypes.shape({
    id: null,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
};

EntityForm.defaultProps = {
  initialValues,
  readOnly: false,
};

export default EntityForm;