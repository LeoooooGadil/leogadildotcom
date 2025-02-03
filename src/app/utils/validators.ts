import { Validator } from "jsonschema";

const v = new Validator();

interface ValidatorProps {
  json: object;
}

const NewProjectSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    slug: { type: "string", minLength: 1 },
    subtitle: { type: "string", minLength: 1 },
    description: { type: "string", minLength: 1 },
    image: {
      oneOf: [
        { type: "string", format: "uri", minLength: 1 },
        { type: "null" }
      ]
    },
    mdx_id: {
      "type": "string",
      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    },
    keywords: { type: "array", items: { type: "string" }, minItems: 1 },
    techstack: { type: "array", items: { type: "string" }, minItems: 1 },
    create_date: { type: "string", format: "date-time" },
    update_date: { type: "string", format: "date-time" },
  },
  required: ["name", "slug", "subtitle", "description", "keywords", "techstack", "mdx_id"],
  additionalProperties: false
};

const NewMDXSchema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 1 },
    type: { type: "string", minLength: 1 },
    subtitle: { type: "string" },
    image: {
      oneOf: [
        { type: "string", format: "uri", minLength: 1 },
        { type: "null" }
      ]
    },
    keywords: { type: "array", items: { type: "string" }, minItems: 1 },
    content: { type: "string" },
    readtime: { type: "integer", minimum: 0},
    create_date: { type: "string", format: "date-time" },
    update_date: { type: "string", format: "date-time" },
  },
  required: [
    "title",
    "type",
    "subtitle",
    "keywords",
    "create_date",
    "update_date",
  ],
  additionalProperties: false,
};

const NewBlogSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    slug: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$", minLength: 1 },
    subtitle: { type: "string", minLength: 1 },
    description: { type: "string", minLength: 1 },
    image: {
      oneOf: [
        { type: "string", format: "uri", minLength: 1 },
        { type: "null" }
      ]
    },
    keywords: { type: "array", items: { type: "string" }, minItems: 1 },
    mdx_id: { type: "string", pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$" },
    create_date: { type: "string", format: "date-time" },
    update_date: { type: "string", format: "date-time" }
  },
  required: [
    "name",
    "slug",
    "subtitle",
    "description",
    "keywords",
    "mdx_id",
  ],
  additionalProperties: false
};

const ValidateNewProject = ({ json }: ValidatorProps) => {
  return v.validate(json, NewProjectSchema);
};

const ValidateNewMDX = ({ json }: ValidatorProps) => {
	return v.validate(json, NewMDXSchema);
};

const ValidateNewBlog = ({ json }: ValidatorProps) => {
  return v.validate(json, NewBlogSchema);
}

export { ValidateNewProject, ValidateNewMDX, ValidateNewBlog };
