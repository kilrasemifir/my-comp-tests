import { Competence } from "../main/entities/Competence";

const emptyComp = {nom:"",
description: "",
prerequis:[]};

export const java: Competence = {
    _id:"java",
    nom:"Java",
    description: "",
    prerequis:[]
}



export const spring: Competence = {
    _id:"spring",
    nom:"Java",
    description: "",
    prerequis:[
        {niveauMinimum:10, competence:{_id:"java", ...emptyComp}}
    ]
}

export const shell: Competence = {
    _id:"shell",
    nom:"shell",
    description: "",
    prerequis:[
        
    ]
}

export const docker: Competence = {
    _id:"docker",
    nom:"docker",
    description: "",
    prerequis:[
        {niveauMinimum:5, competence:{_id:"shell", ...emptyComp}}
    ]
}

export const kubernetes: Competence = {
    _id:"kubernetes",
    nom:"kubernetes",
    description: "",
    prerequis:[
        {niveauMinimum:10, competence:{_id:"docker", ...emptyComp}}
    ]
}

export const listComp = [java, spring, shell, docker, kubernetes]