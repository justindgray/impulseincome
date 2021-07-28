import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import '../components/css/styles.css';  

const validationSchema = yup.object({
  id: yup
    .string('Enter Slot ID')
    .min(2, 'Enter 2 Digit ID')
    .required('ID is required'),
  game: yup
    .string('Enter Game Number')
    .min(4, 'Enter 4 Digit Game Number')
    .required('Game is required'),
  size: yup
    .number('Enter Pack Size')
    .min(2, 'Enter Full Pack Size')
    .required('Pack Size is required'),
});
const Updateform = () => {
  const formik = useFormik({
    initialValues: {
      id: '',
      game: '',
      size: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await axios
      .put(`http://143.198.166.137:5000/236/change/${values.id}`)
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="id"
          name="id"
          label="Slot ID"
          value={formik.values.id}
          onChange={formik.handleChange}
          error={formik.touched.id && Boolean(formik.errors.id)}
          helperText={formik.touched.id && formik.errors.id}
        />
        <TextField
          fullWidth
          id="game"
          name="game"
          label="Game Number"
          value={formik.values.game}
          onChange={formik.handleChange}
          error={formik.touched.game && Boolean(formik.errors.game)}
          helperText={formik.touched.game && formik.errors.game}
        />
        <TextField
          fullWidth
          id="size"
          name="size"
          label="Pack Size"
          value={formik.values.size}
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Updateform;
