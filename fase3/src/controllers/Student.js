import StudentModel from '../models/Student';

const Student = {

  create(req, res) {
    if (!req.body.success && !req.body.firstname && !req.body.lastname && !req.body.birthdate) {
      return res.status(400).send({'message_error': 'firstname, lastname and birthdate fields are required'})
    }
    const Student = StudentModel.create(req.body);
    return res.status(201).send(Student);
  },
  
  getAll(req, res) {
    const Students = StudentModel.findAll();
    return res.status(200).send(Students);
  },

  getOne(req, res) {
    const Student = StudentModel.findOne(req.params.id);
    if (!Student) {
      return res.status(404).send({'message_error': 'Student not found'});
    }
    return res.status(200).send(Student);
  },

  update(req, res) {
    const Student = StudentModel.findOne(req.params.id);
    if (!Student) {
      return res.status(404).send({'message_error': 'Student not found'});
    }
    const updatedStudent = StudentModel.update(req.params.id, req.body)
    return res.status(200).send(updatedStudent);
  },
  
  delete(req, res) {
    const Student = StudentModel.findOne(req.params.id);
    if (!Student) {
      return res.status(404).send({'message_error': 'Student not found'});
    }
    const ref = StudentModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Student;