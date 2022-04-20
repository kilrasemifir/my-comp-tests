export interface Competence{
    nom:string;
    description:string;
    prerequis:Prerequis[]
}

export interface Prerequis{
    niveauMinimum: number;
    competence: Competence
}