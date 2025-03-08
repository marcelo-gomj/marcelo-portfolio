import { GithubRepository } from "@/types/github-types";

const fetchRepository = async (
	repository: string
) : Promise<GithubRepository | null> => {
	const API_URL = "https://api.github.com/repos/marcelo-gomj/";
	
	const res = await fetch(
		`${API_URL}${repository}`,
		{ cache: "force-cache" }
	)
	
	return res.ok ? await res.json() : null;
}

export { fetchRepository };