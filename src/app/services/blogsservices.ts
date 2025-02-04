import { supabase } from "@/utils/supabase";
import { ValidateNewBlog } from "@/utils/validators";
import { CreateNewMDX, mdxType } from "./mdxservices";
import moment from "moment";

export type BlogNewData = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string | null;
  keywords: string[];
  author: string;
};

export type BlogDB = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string | null;
  keywords: string[];
  mdx_id: string;
  readtime: number;
  create_date: Date;
  update_date: Date;
};

const CreateNewBlog = async (blogData: BlogNewData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const _mdxData = {
        type: "blog" as mdxType,
        title: blogData.title,
        subtitle: blogData.subtitle,
        image: blogData.image,
        keywords: blogData.keywords,
        readtime: 0,
        content: "",
      };
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const mdxResponse = (await CreateNewMDX(_mdxData)) as { data: any };

      if (!mdxResponse.data || !mdxResponse.data[0]?.id) {
        throw new Error("Failed to create MDX. Invalid response data.");
      }

      const _blogData = {
        name: blogData.title,
        slug: blogData.title.toLowerCase().replace(/\s+/g, "-"),
        subtitle: blogData.subtitle,
        description: blogData.description,
        image: blogData.image,
        keywords: blogData.keywords,
        readtime: 0,
        mdx_id: mdxResponse.data[0].id,
        create_date: moment().format(),
        update_date: moment().format(),
      };

      const validation = ValidateNewBlog({ json: _blogData });
      if (!validation.valid) throw new Error(`Error: ${validation.errors}`);

      const { data, error } = await supabase
        .from("blog")
        .insert(_blogData)
        .select();

      if (error) {
        throw new Error(`Insert failed: ${error.message}`);
      }

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const SelectBlog = async (BlogId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase
        .from("blog")
        .select()
        .eq("id", BlogId);

      if (error) {
        throw new Error(`Select failed: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
};

const GetAllBlogs = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("blog").select();

      if (error) {
        throw new Error(`Failed to fetch blogs: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
};

export { CreateNewBlog, SelectBlog, GetAllBlogs }
