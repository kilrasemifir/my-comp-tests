export interface Competence{
    _id?: string,
    nom:string;
    description:string;
    prerequis:Prerequis[]
}

export interface Prerequis{
    niveauMinimum: number;
    competence: Competence
}

export interface NiveauCompetence {
    niveau: number,
    competence: Competence
}