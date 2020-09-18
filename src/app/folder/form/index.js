import React from 'react';
import { Form, Field } from 'react-final-form'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import urlManager from 'common/utils/url-manager';

import { submitHandler } from './utils';
import { fieldNames } from './constants';

const initialValues = {
  [fieldNames.ID]: null,
  [fieldNames.NAME]: '',
  [fieldNames.DESCRIPTION]: '',
};

const EntityForm = ({
  initialValues,
}) => {
    const history = useHistory();
    const validate = () => {};

    const onSuccessSubmit = () => {
      console.log('success', history);
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
              <Field name={fieldNames.ID} component="input" placeholder="NEW" disabled />
            </div>

            <div>
              <label>Name Folder</label>
              <Field name={fieldNames.NAME} component="input" placeholder="Folder Name" />
            </div>

            <div>
              <label>Description Folder</label>
              <Field name={fieldNames.DESCRIPTION} component="input" placeholder="Description" />
            </div>

            <button type="submit">Submit</button>
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
  })
};

EntityForm.defaultProps = {
  initialValues,
};

export default EntityForm;