import React, { useState } from 'react';

/**
 * DynamicForm
 * Props:
 * - schema: array of field definitions { name, label, type, placeholder, options, required }
 * - initialValues: object
 * - onSubmit: fn(formValues, files) => Promise
 *
 * Supported types: text, textarea, number, file, select, date
 */
const DynamicForm = ({ schema = [], initialValues = {}, onSubmit, submitLabel = 'Submit', IsEditing = false }) => {
  const [values, setValues] = useState(() => {
    const v = {};
    v.category = initialValues.category || '';
    schema.forEach(f => {
      v[f.name] = initialValues[f.name] ?? f.default ?? '';
    });
    return v;
  });
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e, field) => {
    const { name, value, type } = e.target;
    if (type === 'file') return;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: f } = e.target;
    console.log(f);
    setValues(prev => ({ ...prev, [name]: f[0] }));
  };

  const validate = () => {
    const next = {};
    schema.forEach(f => {
      if (f.required && (values[f.name] === '' || values[f.name] === null || values[f.name] === undefined)) {
        next[f.name] = `${f.label || f.name} is required`;
      }
      if(f.validation){
          if(!f.validation?.pattern?.value.test(values[f.name])){
            next[f.name] = `${f.validation?.pattern?.message}`;
          }
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Construct FormData to support files
      const fd = new FormData();
      let data = {};
      Object.keys(values).forEach(k => {
        fd.append(k, values[k]);
        data[k] = values[k]; 
      });
      Object.keys(files).forEach(k => {
        if (files[k]) fd.append(k, files[k]);
      });

      if (onSubmit && !IsEditing && schema.find(p=>p.type === 'file')) await onSubmit(fd);
    if (onSubmit) await onSubmit(data);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {schema.map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label || field.name}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={values[field.name]}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              >
                <option value="">-- Select --</option>
                {(field.options || []).map(opt => (
                  <option key={opt.value ?? opt} value={opt.value ?? opt}>{opt.label ?? opt}</option>
                ))}
              </select>
            ) : field.type === 'file' && !IsEditing ? (
              <input type="file" name={field.name} onChange={handleFileChange} className="block w-full text-sm text-gray-700" placeholder={field.placeholder} />
            ) : field.type === 'time' ? (
              <input
                type="time"
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              />
            ) : field.type === 'email'? (
               <input
                type="email"
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              />
            ): field.type === 'tel'? (
               <input
                type="tel"
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              />
            ):(
              <input
                type={field.type || 'text'}
                name={field.name}
                value={values[field.name]}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="shadow-sm block w-full sm:text-sm border rounded-md p-2"
              />
            )}
            {errors[field.name] && <div className="text-sm text-red-600 mt-1">{errors[field.name]}</div>}
          </div>
        ))}

        <div className="pt-4">
          <button type="submit" disabled={submitting} className="inline-flex items-center px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            {submitting ? 'Envoi...' : submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;