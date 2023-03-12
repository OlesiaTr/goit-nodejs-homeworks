const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { HttpError } = require('../../utils/');

const contactsPath = path.join(__dirname, './contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    throw HttpError(404, error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.filter((it) => it.id === contactId);
    if (!result) return null;
    return result;
  } catch (error) {
    throw HttpError(404, error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.find((it) => it.id === contactId);
    if (idx === -1) return null;
    const newArr = contacts.filter((it) => it.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newArr, null, 2));
    return idx;
  } catch (error) {
    throw HttpError(404, error.message);
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: uuidv4(),
      ...body,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    throw HttpError(404, error.message);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((it) => it.id === contactId);
    if (idx === -1) return null;
    contacts[idx] = { id: contactId, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[idx];
  } catch (error) {
    throw HttpError(404, error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
