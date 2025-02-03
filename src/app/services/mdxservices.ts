import { supabase } from "@/utils/supabase";
import { ValidateNewMDX } from "@/utils/validators";
import moment from "moment";
import { CalculateReadTimeFromHTML } from "@/utils/helpers";

export type mdxType = "project" | "blog";

export type MDXNewData = {
  title: string;
  type: mdxType;
  subtitle: string;
  image: string | null;
  keywords: string[];
  content: string;
  readtime: number;
};

export type MDXDB = {
  id: string;
  title: string;
  type: mdxType;
  subtitle: string;
  image: string | null;
  keywords: string[];
  content: string;
  readtime: number;
  create_date: Date;
  update_date: Date;
};

const CreateNewMDX = async (mdxData: MDXNewData) => {
  return new Promise(async (resolve, reject) => {
    try {

      const _mdxData = {
        title: mdxData.title,
        type: mdxData.type,
        subtitle: mdxData.subtitle,
        image: mdxData.image,
        keywords: mdxData.keywords,
        content: mdxData.content,
        readtime: 0,
        create_date: moment().format(),
        update_date: moment().format(),
      }

      const validation = ValidateNewMDX({ json: _mdxData});
      if(!validation.valid) throw new Error(`Error: ${validation.errors}`);

      const { data, error } = await supabase.from("mdx").insert(_mdxData).select();

      if (error) {
        throw new Error(`Insert failed: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
};

const SelectMDX = async (mdxId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("mdx").select().eq("id", mdxId);

      if (error) {
        throw new Error(`Select failed: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

interface MDXUpdateData {
  content: string;
}

const UpdateMDX = async (mdxId: string, mdxData: MDXUpdateData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("mdx").update({
        content: mdxData.content,
        readtime: CalculateReadTimeFromHTML(mdxData.content),
        update_date: moment().format(),
      }).eq("id", mdxId).select();

      if (error) {
        throw new Error(`Update failed: ${error.message}`);
      }
      
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

const GetAllMDX = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("mdx").select();

      if (error) {
        throw new Error(`Failed to fetch mdx: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
};

export { CreateNewMDX, SelectMDX, UpdateMDX, GetAllMDX };
