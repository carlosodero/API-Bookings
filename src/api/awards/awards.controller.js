import * as awardsAward from './awards.service.js';

export async function getAll(req, res) {
  const awards = await awardsAward.getAll();
  res.json(awards);
}

export async function create(req, res) {
  const awardData = req.body;
  const awards = await awardsAward.create({ awardData });
  res.json(awards);
}

export async function update(req, res) {
  const { id } = req.params;
  const propsToUpdate = req.body;
  const updatedProps = await awardsAward.update({ id, propsToUpdate });
  res.json(updatedProps);
}
