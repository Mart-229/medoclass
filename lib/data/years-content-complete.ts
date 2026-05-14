// Auto-generated from original HTML files
// Contains all Google Drive links extracted from wicen-main directory

export interface ExamLink {
  year: string;
  title: string;
  url: string;
}

export interface CourseLink {
  title: string;
  url: string;
  year?: string; // Pour 5ème année (2021, 2023, 2024)
}

export interface Module {
  id: string;
  name: string;
  description: string;
  semester?: number;
  driveUrl?: string; // Rendu optionnel - utilisé comme fallback
  courses?: CourseLink[]; // NOUVEAU: Liste des cours individuels
  exams?: ExamLink[];
  corrections?: ExamLink[];
}

export interface YearData {
  description: string;
  modules: Module[];
  resources?: any[];
}

export const yearsCompleteData: Record<string, YearData> = {
  "1ereannee": {
    description: "1ère Année",
    modules: [
      {
        id: "anatomie-1",
        semester: 1,
        name: "ANATOMIE 1",
        description: "Cours et ressources pour ANATOMIE 1",
        driveUrl:
          "https://drive.google.com/file/d/1x8WbdfchvaIW_Mt3cJ09Izn_OkU-6lb_/view?usp=drive_link",
        courses: [
          {
            title: "Drive 2021",
            url: "https://drive.google.com/drive/folders/1fEslEnOuElM6n0AJy_e0xrXf60PyXTED?usp=sharing",
          },
          {
            title: "Membres supérieur et inférieur (2016-2017)",
            url: "https://drive.google.com/open?id=102JDyU_iNE_cCM0dJMEoFOv1NcsgsW-8",
          },
          {
            title: "Coude, Poignet, Avant bras et Main",
            url: "https://drive.google.com/open?id=1VRy2uexatliex7LHWzQ_v9AND7FQH6-T",
          },
          {
            title: "Anatomie de la cheville. Pr Najib",
            url: "https://drive.google.com/open?id=1qDueiKcmxlHBvNOHrOQSqCGFUdidvAsb",
          },
          {
            title: "Anatomie du pied",
            url: "https://drive.google.com/open?id=1QFY5S93c6MiIjEDOmyQqLWlnMgievMB8",
          },
          {
            title: "Vascularisation des membres",
            url: "https://drive.google.com/open?id=15EXU9yk9_mZzveLoe50dP-qXMK9MGEVD",
          },
          {
            title: "Anatomie Présentation Thorax Pr Marouf_2018",
            url: "https://drive.google.com/file/d/1Eznop11Mrd1yeKuiYPYjxsJZNLe01SP0/view?usp=sharing",
          },
          {
            title: "Anatomie du thorax_2020",
            url: "https://drive.google.com/file/d/1Y-2_Q-SzPZRhy4b2vg5QN31xKc1RTjNE/view?usp=sharing",
          },
          {
            title: "Plèvres_2020",
            url: "https://drive.google.com/file/d/1QI57xLRZDyieAnH0K3H8kHL19NlKQYNY/view?usp=sharing",
          },
          {
            title: "Poumons_2020",
            url: "https://drive.google.com/file/d/1G4RZIK_fud1rCZCeArG1M1me85-3UUgL/view?usp=sharing",
          },
          {
            title: "Diaphragme_2020",
            url: "https://drive.google.com/file/d/1ZCfAU1KCY_zIwdhPlw76flLrt7oPz796/view?usp=sharing",
          },
          {
            title: "Médiastin 1_2020",
            url: "https://drive.google.com/file/d/1yZ5hEkCb-44wyuNi9pcsNwrVhRkvkEbs/view?usp=sharing",
          },
          {
            title: "Médiastin 2_2020",
            url: "https://drive.google.com/file/d/1UHpcbIs9rz-wWCT5QH3PJ9y5ruxX4-6L/view?usp=sharing",
          },
          {
            title: "Médiastin postérieur_2020",
            url: "https://drive.google.com/file/d/1FKtYPP3U885YAtJF7ZCJMki7HbTNiqWB/view?usp=sharing",
          },
          {
            title: "Médiastin postérieur suite_2020",
            url: "https://drive.google.com/file/d/1QaVNMHR4HgblDdWLIzPZcaWPY87v9LiE/view?usp=sharing",
          },
          {
            title: "Médiastin 5_2018",
            url: "https://drive.google.com/file/d/1_KQX_xiSLhqe-OR3mwXmc0Zh1MKy57Vv/view?usp=sharing",
          },
          {
            title: "Trachéé_2018",
            url: "https://drive.google.com/file/d/1tn1R7QBybOPFADkw9XUuJXq-QBlo8DTz/view?usp=sharing",
          },
          {
            title: "Anatomie du coeur_2020",
            url: "https://drive.google.com/file/d/1-bLR6YUFFGJdsNLp-eaWIBE0JT5P0GiB/view?usp=sharing",
          },
          {
            title: "Anatomie de la glande mammaire_2020",
            url: "https://drive.google.com/file/d/1lbZZDIzK61SwYcojEHfkA4FxEJv7Mqn9/view?usp=sharing",
          },
          {
            title: "Atlas netter anatomie",
            url: "https://drive.google.com/open?id=1znneSPSzBy367xeLG6om1dVCPz_HQXW1",
          },
          {
            title: "Grays anatomie pour les étudiants",
            url: "https://drive.google.com/file/d/1Y9VRjfGKuGOeJbRX_zZxbXIK8QqrTM6C/view?usp=sharing",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1x8WbdfchvaIW_Mt3cJ09Izn_OkU-6lb_/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1AsJkZ-U-zaHNgGP0JFbicIi3s9ur0iwn/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/12tO4QOraufMlVY7c6JLkntvnGpYFUSXQ/view?usp=sharing",
          },
          {
            year: "2021",
            title: " 2021 Sr ",
            url: "https://drive.google.com/file/d/17XoSeVoqzuYWnR-YFeVC3edWioSPD8gr/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1zh7AgTU7hzCWR5jYK6GbmkAda4PdZIKK/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1hvvPnuDeUeCT2V0FpIZm585hBz0ykUOP/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1cwsIXy_bx5tP4pAToe_Hhh5DaSU4WFIh/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1LLMPGqFMX_dB1LlELQKwSKBZGtuLi90S/view?usp=sharing",
          },
          {
            year: "2018",
            title: " TP 2018 SN ",
            url: "https://drive.google.com/file/d/1-hJH3VbAEoKzRqjxjWviW_B35R0miBPF/view?usp=sharing",
          },
          {
            year: "2018",
            title: " TP 2018 Sr ",
            url: "https://drive.google.com/file/d/1Q6RTB8TN8Nu2CXh1zOACCoF5DfkeCoHz/view?usp=sharing",
          },
          {
            year: "2016",
            title: " TP 2016 SN ",
            url: "https://drive.google.com/file/d/1ldQiQYqDsskYVusF3qKT85FD6Y123RqQ/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1hePmLKHf62Gfx3fLwCoWB5IuZBwA9dpU/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1UtA1yUztcACQxymGr1raw9b6Z4AudiGY/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 Sr ",
            url: "https://drive.google.com/file/d/1GSRFuie_U9PhJFp2xViHG9zCIQ8Bce8y/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1_v45UiDb93pWXFSWTEyTKCAbnvaVoHr9/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 Sr ",
            url: "https://drive.google.com/file/d/1oClrB63wJT0HkflWrzoFMu-9WR4i03pG/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1JqOGJjiF7H80faLfcwH2W0J-8kJY78Eq/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 Sr ",
            url: "https://drive.google.com/file/d/1YTSrqUZuvTBW-6VrDQd0BmY4lzokIF5E/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN Q1 ",
            url: "https://drive.google.com/file/d/1xujQsr3iRLBcCq2lF50eXBN-rrxcXlBn/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 Sr Q1 ",
            url: "https://drive.google.com/file/d/1jnZNhER6TdxmHnH5fSK9C_qy6mPSXf25/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN Q2 ",
            url: "https://drive.google.com/file/d/1KtmWJAAGnEgLmXZLyLyYeSRiYxWSDvDm/view?usp=sharing",
          },
          {
            year: "Drive",
            title: " 20** ",
            url: "https://drive.google.com/file/d/1l_7VSa3TS4VKiv-gJJC94EK25EMmcZjB/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN TP ",
            url: "https://drive.google.com/file/d/16wxTBnO0YyzGVZ0pbpxzeZYcmPAD7FK-/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN TP ",
            url: "https://drive.google.com/file/d/1pMmBltexB3oxt-RtM0WEqsuI1bqrWWT-/view?usp=sharing",
          },
        ],
      },
      {
        id: "chimie et biochimie",
        semester: 1,
        name: "CHIMIE  et BIOCHIMIE",
        description: "Cours et ressources pour CHIMIE ET BIOCHIMIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1Rp7CoCKKa4hmeo6oZTZjlu4Mz5nhONRc?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1UJWQPUdXLsGdcED0wXZH79Y_HSo8O7WZ/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1ve66PooUsPVpAMVTw76DGLKdnP5z2OtP/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/16GKDC_jEBDcGAUf5nzHJ96eEo29PJS1j/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1IZlBVUOQGEg6M6PpL1m6v2c-6U8f_GrS/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1GmAcfR0wEZo3d518x5T3yL6UpaUTQH2h/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1Ui_UoAcH58do5YauDYpCO1GevfglntBW/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1IAlmqG0c3Q60UUoj1sHDZlE4NVj1eglY/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 Sr ",
            url: "https://drive.google.com/file/d/13ATG-PYyMAiTzSF28ZJHG_GFuO8cy1w1/view?usp=sharing",
          },
          {
            year: "2022",
            title: "TP 2022 SN ",
            url: "https://drive.google.com/file/d/1b0uIHjAsE4CDdvq74R5tM-twIkPsb8Sf/view?usp=drive_link",
          },
          {
            year: "2020",
            title: "TP 2020 SN ",
            url: "https://drive.google.com/file/d/1XSzaVmjiHQSLue2r_QHyixQMqjx5wIPy/view?usp=sharing",
          },
          {
            year: "2019",
            title: "TP 2019 SN ",
            url: "https://drive.google.com/file/d/1zM_SwhvzIi6TsEYVvtdAaoKUDazx1iIt/view?usp=sharing",
          },
          {
            year: "2015",
            title: "TP 2015 SN ",
            url: "https://drive.google.com/file/d/1Hx9z8xcleCz3HWjPqcKx2kXKrW9Khoh7/view?usp=sharing",
          },
          {
            year: "2014",
            title: "TP 2014 SN ",
            url: "https://drive.google.com/file/d/1QHMV0LBoHZC8OoAwgQpuxUWhQN4IbCqQ/view?usp=sharing",
          },
          {
            year: "2014",
            title: "TP 2014 SN ",
            url: "https://drive.google.com/file/d/1AmYzYbDm_AcjUdFhN8fzQEhOBUvlN91j/view?usp=sharing",
          },
          {
            year: "2013",
            title: "TP 2013 SN ",
            url: "https://drive.google.com/file/d/1A8E1rgB94meXyy-Me7YPMJExKlAOotM8/view?usp=sharing",
          },
          {
            year: "Drive",
            title: "TP 20** SN ",
            url: "https://drive.google.com/file/d/1wh0PCM71LMMCS7AuYTPHTsySRiS-vOXK/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1fxj_O8fPWM4K5NFZHJwHBlCJ4QPVYI6R/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/10Ii19R2zlTo90ci29C4g-9atRGcjnZSI/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/15oV7TIdggQ2YXoW4R1hnDm4wGlegG9Id/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 Sr ",
            url: "https://drive.google.com/file/d/1GEENuIKgAcmx9kkoVMbQ6NVSoWyHrFLr/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1hUbsawZZBxBiVCppKjz_4IpmB9x8-faz/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 Sr ",
            url: "https://drive.google.com/file/d/1vcUgVfrZmNaY1PqMsinI-OUeq6TSSCjb/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN ",
            url: "https://drive.google.com/file/d/1rjh95BRRRaTwdzDOtVWuOX8s9MlGFkh1/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 Sr ",
            url: "https://drive.google.com/file/d/1nYHWeC1cl49bpCM1u96B-3bLVae0eP-e/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 SN ",
            url: "https://drive.google.com/file/d/1PbsyBosdh_XaSgiO9sKc_WhBhGTeD4rL/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 Sr ",
            url: "https://drive.google.com/file/d/1ltY2b8KJfHbv7j-8RQ_snpvjFCrPZYr0/view?usp=sharing",
          },
          {
            year: "2013",
            title: " 2013 SN ",
            url: "https://drive.google.com/file/d/1VHsPvpcRtbxYqQ6a_bn46hOWaCss1SvS/view?usp=sharing",
          },
          {
            year: "2012",
            title: " 2012 SN ",
            url: "https://drive.google.com/file/d/1-KED3e1sBj4lzDiboPTnm_iVcpycS7uE/view?usp=sharing",
          },
        ],
      },
      {
        id: "biologie",
        semester: 1,
        name: "BIOLOGIE",
        description: "Cours et ressources pour BIOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1kw5TnEz2sR-aFC5lYivf5CVG_1zvvGOr?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1kYi5wRs5VLF_IIkc0aFpmgNWXXDaT89o/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1SmYp1jOx1AfU-ZEV174RvZt_J0KJULsp/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1xMmCrdAuy1Ha423lljwP_hawObyUMQcP/view?usp=sharing",
          },
          {
            year: "2021",
            title: " 2021 Sr ",
            url: "https://drive.google.com/file/d/1eATY0eEWfGdynNSKzUl_kkpqyyCN9IoE/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1j5Zw28NbXbIZb-dQhDEw2vbg282KMF9S/view?usp=drivesdkg",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: " https://drive.google.com/file/d/1hpO73mClg0FokcZ6EjBJz2xeeOZhYdQm/view?usp=drivesdk",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1gdAD8urF2nGwY1k4Uxp9FC6H5cDEUbLJ/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1oxAqDqXTPqjAQ0hepILfJX4tuFlzdgCu/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/17lCup32HDaYmZPYp8nAvdtdVFtBcCKSP/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1XRNIqnZo1K1nFxRMxc-qnJ5EhIn5cTQ0/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1iIzulE_7DY2ZB3RbCcj82F_019boszZH/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 SN ",
            url: "https://drive.google.com/file/d/1WjfTyG3rjQhOIBAwXZiN-oMjZF9saNnX/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 SN ",
            url: "https://drive.google.com/file/d/1UuOrXxDmTq7N8Wis4aF7et-FWD85SCMR/view?usp=sharing",
          },
        ],
      },
      {
        id: "sante-public-1",
        semester: 1,
        name: "SANTE PUBLIC 1",
        description: "Cours et ressources pour SANTE PUBLIC 1",
        driveUrl:
          "https://drive.google.com/drive/folders/16J5y44sTodtQCMAlmX-hUBbzreh8Ulyd?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1nJKG5H_Er3_4f6hDVBVxELa80qB9cAAI/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1UqJRUCgpje-bi_HqKU5P4lKYef-MwNFS/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1_UyeKpE8kp9Cz8Q9idcAPdqvV6cZeIql/view?usp=sharing",
          },
          {
            year: "2021",
            title: " 2021 Sr ",
            url: "https://drive.google.com/file/d/1tq5xJFEzsjuLUnsiMStTCQUmJolZRkQw/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1At-Z-mMjiZU-j-AJpDetyHjrmY6KypVc/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1I-s6pHywasqDxHt_urEsonjk7paQrwWT/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1HbYiVGJxCaN97gslpcGoMHDtmu1yftVc/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1YUTwSA68rm7LkuUOY3jqfTEWkjQWcRE_/view?usp=sharing",
          },
        ],
      },
      {
        id: "meth-d-app---amp--termino",
        semester: 1,
        name: "METHODOLOGIE D'APPRENTISSAGE  ET TERMINOLOGIE",
        description:
          "Cours et ressources pour METHODOLOGIE D'APPRENTISSAGE  ET TERMINOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1x5u4bu_bfEDV341TnGluVq0DXmRGJdLv?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1r1buLo-Rkl_uUFssbOJ1qSONLynMTQWw/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1D9PHB8e6esVUTElo9BPPHgyKLPbe7EcG/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/13Bj_st9vdmaWMRDl2cTnvY740ZZBfKmr/view?usp=sharing",
          },
          {
            year: "2021",
            title: " 2021 Sr ",
            url: "https://drive.google.com/file/d/1bei2r1mAJl3-xgCoOveiuGmMyEv_qnoz/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 Sr ",
            url: "https://drive.google.com/file/d/12hnAutDi07fxGc-hfdznrP3_ZsyfmaoQ/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1hUfOENVGpTf14kxGG3o-omQvv_ckGysJ/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/19A-tfuFQ9vLJKdi2elUShwXaLlxQyZU7/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/17HdzZ5Vr0ztjueAacdljFLuQ5xZ-ib48/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1YtACjCuO74tNY4UosulXjRtpRLFsUyPg/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 Sr ",
            url: "https://drive.google.com/file/d/1o-BmvLUXA4kI2r2AS7lX3ZeMAQDyNmm0/view?usp=sharing",
          },
        ],
      },
      {
        id: "langue--amp--com",
        semester: 1,
        name: "COMMUNICATION ET LANGUE",
        description: "Cours et ressources pour COMMUNICATION ET LANGUE",
        driveUrl:
          "https://drive.google.com/drive/folders/1pYeyA4bHDZunXmfF-IjzI5JJWKwPBR71?usp=sharing",
        exams: [
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1YQgzM-VeoagZEQCvbHX9v-lIUVSdony0/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1McxFQMeQG42Y_9uQdUrtheXvwqqmjavP/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1vgR1WNAZGZWr5sfjG_2CkLCw5WYw3y5F/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 Sr ",
            url: "https://drive.google.com/file/d/1KA-aZs234uO4rWGTXnanJ3Y0I7WuydiB/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1IRHfroTxf24lxB-ydtJzngJnSyRxNU1e/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/open?id=18_mzu9TnXxHMIZUt_WktZ_b_ls-_vZKB",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/160EkTcOmgc9TIqSvNhlblz8SjZTiZ1qW/view?usp=sharing",
          },
        ],
      },
      {
        id: "biophysique",
        semester: 2,
        name: "BIOPHYSIQUE",
        description: "Cours et ressources pour BIOPHYSIQUE",
        courses: [
          {
            title: "Biophsq échographie",
            url: "https://drive.google.com/open?id=15kMY44kTH4syJjtOMWijTV8vxvOW_5qD",
          },
          {
            title: "Biophsq Bentata 2018",
            url: "https://drive.google.com/open?id=15-uWlloXvqX_a4HH7ntiyo8M87hufPnu",
          },
          {
            title: "Biophsq Radiothérapie 1 radiobiologie",
            url: "https://drive.google.com/open?id=1oUzaTGzNk3skif5r9JUroIQsJ2ybEqPz",
          },
          {
            title: "Biophsq Radiothérapie 2",
            url: "https://drive.google.com/open?id=11Zk0DeXGrkFUaLp2g5QF75hVZKN6qp3P",
          },
          {
            title: "Bases physiques de l'IRM",
            url: "https://drive.google.com/open?id=1jYLYSGYiGMJDcWlp0c1V20sI2K8ezixQ",
          },
          {
            title: "Biophsq Optique Pr sekhsoukh 2013",
            url: "https://drive.google.com/open?id=1Tmzc4u-SDHRm-IQyQVFjK_jbJprq9ePx",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1NiczWrEPkC6g2DEhNbTWGLjAL-mjtGDD/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1rSZzx-srOhn2LDeK0x12DEWmwHupsyGy/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/10EqJRG0SyoPOO2X2qW5fekC8gfZqSYSR/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1Glhnxv5zNV9UqbymYOV5cMxPN9wRo-FS/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1FIwbkSe6s0eq_7DJxfJCSgqFAMAM8Ohe/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1_OrJmZ1uFwO2PBfyJZfre9Vxl2_45t7L/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1sSP2XU-ZaKIKAvTcjHwsNkAGKe-H2V5c/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1PY3qu6I1xfDVyDPC_93FpgCiD3XQy8Wy/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1Sd6kdYwKJtevdtD_FTjCxFTCBctOThYF/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/188TBNKrC4hrKHj2RUAq43ZUbjzUNL5HF/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1jUdPYoVPeCfWt0vG4MfkGjkfe9mUkiqz/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1xpAqp6tvjgwlS-KAAAPnBSRJ6oHfFPzM/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1I2q-aiUTylp-MigvanAjsofh3WUYcG7G/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1ygkZ5qxQy_8PnS5ZPkHdiUg3jToOsd2g/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1VBGY3WL3Not-x7k1vofyiSyt4aLW7RGu/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1oqBCjiBzjQtHbZnKENHNTQPuow3UKqBS/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1pP2G7GpFPVxPnnVgLEQUUBzcoKWzt935/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1SuLOB8h1OazvS525OS5qE9H-wZ69-wr6/view?usp=sharing",
          },
          {
            year: "2016",
            title: " Sr 2016 ",
            url: "https://drive.google.com/file/d/1V_ELL1B0YAbHSXeGdRKNSj7rnW_IV3HF/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1zYEHttpdHgnAVnV4hTmGrDgaxX9nqaUl/view?usp=sharing",
          },
        ],
      },
      {
        id: "histoire-de--la-medecine--amp---psychologie",
        semester: 2,
        name: "HISTOIRE DE  LA MEDECINE ET PSYCHOLOGIE",
        description:
          "Cours et ressources pour HISTOIRE DE  LA MEDECINE ET PSYCHOLOGIE",
        courses: [
          {
            title: "Le stress HMP",
            url: "https://drive.google.com/open?id=10sBL14nRE1FzswdjfVOHdOkKFuAl7QYo",
          },
          {
            title: "Personnalité 2 HMP",
            url: "https://drive.google.com/open?id=1f_XQSw4gb8SNhrKuN84yXGA_WGo3Dkyn",
          },
          {
            title: "Relation soignant-soigné 1 HMP",
            url: "https://drive.google.com/open?id=1C4kJOZN7gd2pRxOXAw1kx__FhI0qpR7u",
          },
          {
            title: "Réactions psychologiques à la maladie Dr Barrimi",
            url: "https://drive.google.com/open?id=1oTXHH3HigtGOHEOZRck_l479dT1uKBtX",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1NDS3vO8K4lkUQd-G66SGHMBLyX2RhVYn/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/17B9eqMCKkTT2XVLs7tnz6BHwZskoZFPu/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1lNk4os0Ee3xlLfG9G3w0V206EfoZCzbp/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1T0VsOIyIxaYkvpieJOaGSv0F0pV_bZ2H/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/10BCmZ7pEw-xL4_fXppXTfvve2JBIzT82/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1I2jwmnY6sYaxqiMLX12XvIrexjMqv_3Y/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/146noTRHl7cC33AuFWIE1-oQMujkPBlE3/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1kAsYW9R4-1O0tS7W8FW15KwgwrD3DnJg/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1H5gQyOQqMNd_pniON2em8Ui0420TWytN/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/11GlGRMkE0U_mE2tbumOHs0l7Gvif89v_/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1t-N5rFqHSVelbouL1IY-vIRB38bq0PbU/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1Oitj2GRwUXy5Z6dXgncqewZjUZCs65g4/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1yjloeOTChvyi87-P3LnXAguWNtd2gdbX/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1OvqPi-yIs-Zt0_3ICzEIH2hS2rAup4Vg/view?usp=sharing",
          },
          {
            year: "2016",
            title: " Sr 2016 ",
            url: "https://drive.google.com/file/d/1aZ9b8HP2kU2D6d5o8B7c12zdfERZZyQM/view?usp=sharing",
          },
        ],
      },
      {
        id: "anatomie-2",
        semester: 2,
        name: "ANATOMIE 2",
        description: "Cours et ressources pour ANATOMIE 2",
        driveUrl:
          "https://www.dropbox.com/sh/znmrvdulfy4780g/AAAky1kuSD7My3XaZmPLg__ga?dl=0&preview=ANATOMIE+II.pdf",
        courses: [],
        exams: [
          {
            year: "2023",
            title: "SN 2023",
            url: "https://drive.google.com/file/d/1nT3Tbioq5DYqXTaTagkEk1HwfOJ-cemy/view?usp=drive_link",
          },
          {
            year: "2023",
            title: "Sr 2023",
            url: "https://drive.google.com/file/d/1OcjvH4JEsOgTCFfprdKPDlPyeIxqMfDI/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "SN 2022",
            url: "https://drive.google.com/file/d/1pawecENaLzXGxmGI25Z4nsArE0aJn9uU/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "Sr 2022",
            url: "https://drive.google.com/file/d/1O5OItu7zOSrLKi5TFqNMuF49CNVaxwNJ/view?usp=drive_link",
          },
          {
            year: "2021",
            title: "SN 2021",
            url: "https://drive.google.com/file/d/1-QR8sYysDggEK05tXv6Caxf0qbRffpjZ/view?usp=drive_link",
          },
          {
            year: "2021",
            title: "Sr 2021",
            url: "https://drive.google.com/file/d/1VxkhDgpNx1YX_0TA0dEU1prybPFMHjMf/view?usp=drive_link",
          },
          {
            year: "2020",
            title: "SN 2020",
            url: "https://drive.google.com/file/d/1gv9-t-OHRb117hYeTy4O8wncx8fEMpMK/view?usp=sharing",
          },
          {
            year: "2020",
            title: "Sr 2020",
            url: "https://drive.google.com/file/d/1RY-NK8SmnqiWSFfDNStKZORiJlp8LaXs/view?usp=sharing",
          },
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/18NKWDtdV5MKqWdEKugkloeqMqV_Fx6ru/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr 2019",
            url: "https://drive.google.com/file/d/1JxKI9RIBujRkDaGJdvK7BoWSwwiZo-uh/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr TP 2019",
            url: "https://drive.google.com/file/d/1_bUEH5aguL3wzUubYD028og7oAAhjYsZ/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018",
            url: "https://drive.google.com/file/d/1czhqsMl3pJKKe6_C2fhIwOH9x9aBjLi0/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/1vihXgOUw1jAUutFplbpXi01Eh82_EazG/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr TP 2018",
            url: "https://drive.google.com/file/d/1GrLvpAdbwfxZAUusx_S82qx8pP-mTj2o/view?usp=sharing",
          },
          {
            year: "2015",
            title: "SN 2015",
            url: "https://drive.google.com/file/d/1PDN_xWvHvTIsrLaSSFv7jvI8uODRidCN/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2015",
            title: "SN 2015",
            url: "https://drive.google.com/file/d/1W_azXACrhTW3bXidguRu73p42o-3obHA/view?usp=sharing",
          },
        ],
      },
      {
        id: "histologie-generale",
        semester: 2,
        name: "HISTOLOGIE GÉNÉRALE",
        description: "Cours et ressources pour HISTOLOGIE GÉNÉRALE",
        driveUrl:
          "https://www.dropbox.com/sh/znmrvdulfy4780g/AAAky1kuSD7My3XaZmPLg__ga?dl=0&preview=HISTOLOGIE+GENERALE.pdf",
        courses: [],
        exams: [
          {
            year: "2023",
            title: "SN 2023",
            url: "https://drive.google.com/file/d/1IzBYUQRsE1_VQcIBgEJz88UkXXecnR-x/view?usp=drive_link",
          },
          {
            year: "2023",
            title: "Sr 2023",
            url: "https://drive.google.com/file/d/1BwrOMt5TUf402y-loyRdpCYDKwstmA5x/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "SN 2022",
            url: "https://drive.google.com/file/d/1vHty_7IE7igFQ79WXMFVXZCuZs7tDNmi/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "Sr 2022",
            url: "https://drive.google.com/file/d/1WApeVCbi-AQgBTncYsc4s8h6PATopiYo/view?usp=drive_link",
          },
          {
            year: "2021",
            title: "SN 2021",
            url: "https://drive.google.com/file/d/1Cyy0VGhT3wBFTFvOexsZ-aHZdTM7_q4H/view?usp=drive_link",
          },
          {
            year: "2021",
            title: "Sr 2021",
            url: "https://drive.google.com/file/d/1VTnp_a9yqGr9fumJLVgZhi5c59ZY1g77/view?usp=drive_link",
          },
          {
            year: "2020",
            title: "SN 2020",
            url: "https://drive.google.com/file/d/1cyG2MG_dS6ECIlCYGba7A2ELNF1m9b9H/view?usp=sharing",
          },
          {
            year: "2020",
            title: "Sr 2020",
            url: "https://drive.google.com/file/d/1MQoqJuTfd1guI5NXHFCxMyL9XCZHpXvT/view?usp=sharing",
          },
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/1oQjz6g_ioLVGNOsTkZzGZIdxhXPw8ZcH/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr 2019",
            url: "https://drive.google.com/file/d/1JtpJdYSCtzLHYmh1QrLgFakw5Rf9Ipkz/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Excep 2019",
            url: "https://drive.google.com/file/d/1_P2KVZUdplA_sL79dtdvPv-7W3AFRrYF/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018",
            url: "https://drive.google.com/file/d/1tGQmEQGgzmUvXoC2DvcwTs4xZp8pV--q/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/1QnFhQIhDg3ETFj1aYh8djyNZ2XlDZnxK/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/1ZCGhJYHAfUmKD-mYnEGmZM7vEIgYlovR/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018",
            url: "https://drive.google.com/file/d/1KCnoG0K2MogKbna7W-yzz44TShGiU2vH/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/1IeXGzmc5k6wxUS4w4W73XOPJg6DQs4qF/view?usp=sharing",
          },
        ],
      },
      {
        id: "tec",
        semester: 2,
        name: "TEC",
        description: "Cours et ressources pour TEC",
        driveUrl: undefined,
        courses: [],
        exams: [
          {
            year: "2023",
            title: "SN 2023",
            url: "https://drive.google.com/file/d/1QRIw55UVa2dP0Y2gE1MmThpIDq3HfFAK/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "SN 2022",
            url: "https://drive.google.com/file/d/1ABjiN69mO_dRHt8t0m2ZBExRGbi2JmjS/view?usp=drive_link",
          },
          {
            year: "2022",
            title: "Sr 2022",
            url: "https://drive.google.com/file/d/1cqNR7lI5KDScMbIYbUPnwGcfeicgyI0W/view?usp=drive_link",
          },
          {
            year: "2021",
            title: "Sr 2021",
            url: "https://drive.google.com/file/d/1YdXMpJnEde3mDpGCtcAtXYNaVKT0QEgG/view?usp=drive_link",
          },
          {
            year: "2020",
            title: "SN 2020",
            url: "https://drive.google.com/file/d/1vCew3JiXU-1rpCuvlVl0uDdUO8_RrcQ7/view?usp=sharing",
          },
          {
            year: "2020",
            title: "Sr 2020",
            url: "https://drive.google.com/file/d/1VW3kQvKpugUL0GiA_Y6xbzaTWrVo6azv/view?usp=sharing",
          },
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/1IWjErN4IPCCUyHg07klaLAKLRW5Le_GR/view?usp=sharing",
          },
        ],
        corrections: [],
      },
    ],
  },

  "2emeannee": {
    description: "2ème Année",
    modules: [
      {
        id: "anatomie-3",
        semester: 3,
        name: "ANATOMIE 3",
        description: "Cours et ressources pour ANATOMIE 3",
        courses: [
          {
            title: "Tronc cérébral 2021",
            url: "https://drive.google.com/file/d/1uvjndhBe1ECNXj6t1sgPebukmOTt0h19/view?usp=sharing",
          },
          {
            title: "Moelle épinière 2021",
            url: "https://drive.google.com/file/d/1I7cc7-EP91O81-5MwqKdiM6k36h215pO/view?usp=sharing",
          },
          {
            title: "ANATOMIE III",
            url: "https://drive.google.com/open?id=1obVqeZg79szQZzK44PBmIm3jpCzP_c2f",
          },
          {
            title: "Configuration Interne ENcéphale",
            url: "https://drive.google.com/open?id=1dWOz5Ch8-mmFa5MDP8Vul9ykdwtUmly5",
          },
          {
            title: "Nefs craniens",
            url: "https://drive.google.com/open?id=1lmSvJoIVHHMOdZ2IhxiOqF2C5aP3rg5A",
          },
          {
            title: "Système nerveux central",
            url: "https://drive.google.com/open?id=1pqu8qriF7PMlmtDcXUG1eRFsh5rZZvPf",
          },
          {
            title: "Tronc cérébral & Cervelet",
            url: "https://drive.google.com/open?id=1BPS844SG8D5uyVvL27Uw23U4bMVHxILE",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "2010 - 2023",
            url: "https://drive.google.com/file/d/1Cp_P_i5uovRXWlLcctCncgR9SHX8r_w9/view?usp=drive_link",
          },
        ],
      },
      {
        id: "semiologie-1",
        semester: 3,
        name: "SEMIOLOGIE 1",
        description: "Cours et ressources pour SEMIOLOGIE 1",
        driveUrl:
          "https://drive.google.com/drive/folders/1A0LmPGvPFeTngq7n_DnuFaNEi3HX3YdE?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/19sJ1RAR9-VONGxVo9ooMme8ndg13Q_QJ/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1t2ybu17UJGlz8plIrymEZaKdpwXqFAPV/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1igfsjF88ebEQoib3PKMZOwnuowQWlBba/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1En-4dsZz0Vqkc-iJhGxu8MNKg0ow005B/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/180u30K_u9e0rIkf16I8Olze9Ngl7MwHn/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1Cq8NAJOp3jAvsdSCD0_DYikv00w4knaW/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1rqoLjYgrCoTgSOnPDzwf76ok__xlY0vM/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1MrdMt2CuC3vjdXM9hHyNNR2fEJu2w0so/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN ",
            url: "https://drive.google.com/file/d/1XNeppBgzeFuHOPb8BVdCNpW-Kzl6sAli/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2018",
            title: " 2018 SN crg ",
            url: "https://drive.google.com/file/d/1pY6sJgf96mduq2GlTAn7QdEmpATbSGwZ/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SR crg ",
            url: "https://drive.google.com/file/d/1fEs91qV8phQeihlspgHEawJP08pH--6X/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN crg ",
            url: "https://drive.google.com/file/d/1aJAQ1TpWEPkiAIHe6DHzEkqh7qv30dG5/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SR crg ",
            url: "https://drive.google.com/file/d/1HEOKj4TrRUiLt7bsh3Tc-W4yNO8GmhQy/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN crg ",
            url: "https://drive.google.com/file/d/14pwwmIvWrcVZwIt4WQ61hvKzuML12uyn/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SR crg ",
            url: "https://drive.google.com/file/d/1IIShoiqgc0NpesBdtXpjQ9f-wXwVg-O_/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN crg ",
            url: "https://drive.google.com/file/d/1KssN516N6MZc3JMKqXFsRK_cNZRJZBPY/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SR crg ",
            url: "https://drive.google.com/file/d/1cCcWrL5iP7oLkRsIsF_CHnESTR5pp-We/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 SN crg ",
            url: "https://drive.google.com/file/d/1Jwqy-mMGBOniMuJCpce6vAKQmtMclUG-/view?usp=sharing",
          },
          {
            year: "2014",
            title: " 2014 SR crg ",
            url: "https://drive.google.com/file/d/1TBLg7d7158iqHllhqi_OIqYLX3q5zB-U/view?usp=sharing",
          },
          {
            year: "2013",
            title: " 2013 SN crg ",
            url: "https://drive.google.com/file/d/1bZg81xeNr0e8rZOAnQk8xp_ozWpiWl4H/view?usp=sharing",
          },
          {
            year: "2013",
            title: " 2013 SR crg ",
            url: "https://drive.google.com/file/d/1Iz5YghQQhzgsDGdNTXTfYVcdXWdYOwPM/view?usp=sharing",
          },
          {
            year: "2011",
            title: " 2011 SR crg ",
            url: "https://drive.google.com/file/d/1BuWXiJ1qdJl4nRw9Ioz5PZI738dQUXUK/view?usp=sharing",
          },
        ],
      },
      {
        id: "physiologie-1",
        semester: 3,
        name: "PHYSIOLOGIE 1",
        description: "Cours et ressources pour PHYSIOLOGIE 1",
        driveUrl:
          "https://drive.google.com/drive/folders/1ccQ3b4pzVNmdLWbfHtwpfd-_6ofUcXUg?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1Xz2_W7C5elWm0X0HrkxGwKFbBK_ECJ14/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1bJ2oRLA7QRwwRemAfeT6sunLnxVq7U6Z/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1fq7GsNo90u5oi5lZqfGLLcgYlvyKkJrx/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1_r31Eq9BAHxlyYt9RVIeY38kZORhn_Mb/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1hdbzAjTVV5wvWxFFItWFfRZVmNFR9sQs/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1N2jmY_LeeJ5gomGXVRDG2fLJLRR4W5Vx/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1oSp3_iFU0I1TpKqQYvj2NhGC2UXJsuNW/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/154srm4cVqzN2DLWiVrEtE48sh7jygCNE/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " 2019 SN crg",
            url: "https://drive.google.com/file/d/1PQo0wZEyC-anvQqiexCyQsgo0jxUpcVW/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN crg",
            url: "https://drive.google.com/file/d/1EGtE5bjAFkeB9WpkyyD1ah-0952LcnN4/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN crg",
            url: "https://drive.google.com/file/d/18qjEeMvwfPR4uGC4YZY0sYk4Qo8i73WU/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SR crg",
            url: "https://drive.google.com/file/d/1k72fJmdf0IacLBrrEG7AKMIWr-03cTIs/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN crg",
            url: "https://drive.google.com/file/d/1g7Vr8G7mLBFeF0oAqTXyZ_alklXj00u_/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SR crg",
            url: "https://drive.google.com/file/d/1jnguLW2PGr0htrtotvpPgTZfpviMAE9g/view?usp=sharing",
          },
        ],
      },
      {
        id: "histo-embryo-speciale",
        semester: 3,
        name: "HISTO-EMBRYO SPECIALE",
        description: "Cours et ressources pour HISTO-EMBRYO SPECIALE",
        courses: [
          {
            title: "Drive 2021",
            url: "https://drive.google.com/drive/folders/1xF81wXbm1iPgN7hSTaW4vbxMm94AxWjO?usp=sharing",
          },
          {
            title: "Histologe Spéciale",
            url: "https://drive.google.com/open?id=1jf6Kk9QkchegF4jScscamN_BzE2fXGaV",
          },
          {
            title: "Embryologie Spéciale",
            url: "https://drive.google.com/open?id=1CAUt7D2y9I-23h1ZipH0fJ32LeG83qFf",
          },
          {
            title: "Embryologie Digestive",
            url: "https://drive.google.com/open?id=1RipO1eC82Q7DcW5_IP9Axpw6CIoxOl_s",
          },
          {
            title: "TP féminin",
            url: "https://drive.google.com/open?id=1QlAIJkQjCW2d_dICMaCCJiwc7_ZRNTXn",
          },
          {
            title: "TP glandes Syst digestif, Foie",
            url: "https://drive.google.com/open?id=1jbyS06lWxignyStYVm7Pn-HmJTauHUfF",
          },
          {
            title: "TP Syst circulatoire",
            url: "https://drive.google.com/open?id=1kqIKT0HzrlfVykU0OnOz29UoKWqWy7wD",
          },
          {
            title: "TP Syst génital mâle",
            url: "https://drive.google.com/open?id=1-cV9c35vHyUnn1znRNINi1Ln7u3vFLBw",
          },
          {
            title: "TP Syst urinaire",
            url: "https://drive.google.com/open?id=1UMjR94foVFlYqH0ZYb0jbmDuTge-yy3K",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1Ca5Og7DhKulHd9A1fKVeCnhXG_BOj6rl/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1ZrwN2siatv77_5_YK6aMFvezt37txe-l/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1Sg5hzdIw31RoMofg57WpJ6fdNq028Ap6/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1tQPCBKFKImunnJ6MIj7kUhkVD4ohm2Q1/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1wm_OhGjiVKTydCWv2yfUrJ3Rw5aSC1_C/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1Dqo3pgJWngvs0xkeLaFHsES-ny2hxtJg/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 Embryo ",
            url: "https://drive.google.com/file/d/1siZaZHE4IFIVLd21CYHeeGkHnGU8cxOc/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN et SR ",
            url: "https://drive.google.com/file/d/1vz4l_Wr3QyLZV8A7gKm44ANlE4WNL75d/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " 2019 SN crg ",
            url: "https://drive.google.com/file/d/1Zri1hST7Dm0FZE0PqAegVRzgwJgwsI2v/view?usp=sharing",
          },
        ],
      },
      {
        id: "med-exp",
        semester: 3,
        name: "MED-Exp",
        description: "Cours et ressources pour MED-Exp",
        driveUrl:
          "https://drive.google.com/drive/folders/1tWtWPCR_ivWUQaKoIyozdgEStSE3PCbX?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1t640YUUEPxlOLvBTuEd_UfwB5CDWtYFh/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1kKYzLHrs4Js5p_2jpH4ESzpwCaSSeMRy/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1Y428KgoL3SjBGKn3HMWXgh9NRrNx9ZG_/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1ac8dMxW7G9EBUq5mpf4rpEHounUhD6YM/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1kY6Ui4I9FyKrpD7sIkSPt49to68Dr9NW/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1f67pcXsqb1J-uyYfpzPpGHCwl54CcDyq/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1Jyd8cQ0lNOEjW3ntN_IfnOEK-bnDdi98/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2017",
            title: " 2017 SN crg",
            url: "https://drive.google.com/file/d/1siseXJEZnsuBeH8uHyweQyFZXpnOLG3u/view?usp=sharing",
          },
          {
            year: "2011",
            title: " 2011 SN crg",
            url: "https://drive.google.com/file/d/1J5g-9pf9Cod4yAE5PMAqCodV9VnA2HoC/view?usp=sharing",
          },
        ],
      },
      {
        id: "micro-immuno",
        semester: 3,
        name: "MICRO-IMMUNO",
        description: "Cours et ressources pour MICRO-IMMUNO",
        driveUrl:
          "https://drive.google.com/drive/folders/1b4dDoOouh8no7etQr1shZVjmxlHsHtcA?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " 2023 SN ",
            url: "https://drive.google.com/file/d/1ImJfDCMB3OhmYgx2Qk886rBJ0PI-A-q-/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " 2022 SN ",
            url: "https://drive.google.com/file/d/1LKbasUQtDqTzdFV5lUooXyoA8PinVJ-w/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " 2021 SN ",
            url: "https://drive.google.com/file/d/1HEHSO9n8qpZKoivpUxYJRaYFMZRQRuoQ/view?usp=sharing",
          },
          {
            year: "2020",
            title: " 2020 SN ",
            url: "https://drive.google.com/file/d/1Va_9YEWjYrQuWZFoNRW1GESqJMzhj7fX/view?usp=sharing",
          },
          {
            year: "2019",
            title: " 2019 SN ",
            url: "https://drive.google.com/file/d/1xC9Kawg-L5Q03AlOXe22Z8KHmuIbfzA9/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018 SN ",
            url: "https://drive.google.com/file/d/1YRJ-RSrN6gU1XkJAknRFKtEQRn3z8GyE/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN ",
            url: "https://drive.google.com/file/d/1I-T7icRr8KHMA22FXYf_QSbshEC5zhl_/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN ",
            url: "https://drive.google.com/file/d/1AR066WDqrr85RDfaruYri1MRfwUehDjq/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2018",
            title: " 2018 SN crg",
            url: "https://drive.google.com/file/d/1bM-o4-bjb4Vh1lojaRX4qpla5kpa82Ak/view?usp=sharing",
          },
          {
            year: "2018",
            title: " 2018(Immuno)crg",
            url: "https://drive.google.com/file/d/1G7fUeKTMJ6KrH-Q2lNv0lcd8LYi6oai0/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SN crg",
            url: "https://drive.google.com/file/d/1K7WKO90ZIhGV5rsxWTKcbMp4fQrycOIf/view?usp=sharing",
          },
          {
            year: "2017",
            title: " 2017 SR crg",
            url: "https://drive.google.com/file/d/18l-qQHx6ZP8qUgwAWx6Gk0skQjamRs4-/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SN crg",
            url: "https://drive.google.com/file/d/1Vhh1kUUI-ROPxEzPcZpJz71vE-C5q9_S/view?usp=sharing",
          },
          {
            year: "2016",
            title: " 2016 SR crg",
            url: "https://drive.google.com/file/d/1OI77ki1x45nUAyVUCJvjOaW0RIJKCvKP/view?usp=sharing",
          },
          {
            year: "2015",
            title: " 2015 SN crg",
            url: "https://drive.google.com/file/d/1L1RhCXjgjuU9W7gHn0aXGc3WYz0-8Dn_/view?usp=sharing",
          },
        ],
      },
      {
        id: "anatomie-4",
        semester: 4,
        name: "ANATOMIE 4",
        description: "Cours et ressources pour ANATOMIE 4",
        courses: [
          {
            title: "Cours d'Anatomie 4",
            url: "https://drive.google.com/open?id=1vJaEUzBVFAagIdNer1Z9MvtboeUjVnCz",
          },
          {
            title: "Les muscles peauciers de la face",
            url: "https://drive.google.com/open?id=1zhxW7s19Nv9tTbLUz7-oAexp-tEw3Zlz",
          },
          {
            title: "Lappareil auditif",
            url: "https://drive.google.com/open?id=1K2QDVs4D9na7idhqyeDtojHCtDp1ZZTF",
          },
          {
            title: "Cours et TP dAnatomie IV de appareil de la Vision",
            url: "https://drive.google.com/open?id=16ZkwBCxljtOf2wbenMLNoN9kQqdSDIkr",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "2015 - 2023",
            url: "https://drive.google.com/file/d/1x9n5rl8EQuHB7iDXu2_-YvHGdwKNDgUg/view?usp=drive_link",
          },
        ],
      },
      {
        id: "biochimie-clinique",
        semester: 4,
        name: "BIOCHIMIE CLINIQUE",
        description: "Cours et ressources pour BIOCHIMIE CLINIQUE",
        courses: [
          {
            title: "Biochimie Clinique",
            url: "https://drive.google.com/open?id=1dGqgcxFPkTXKvNkQl-stE9FViIWPzthD",
          },
          {
            title: "Valeurs Usuelles",
            url: "https://drive.google.com/open?id=1aPnlunex-OxZgcOHgfg__Jc1qkkne5Jv",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1vRKYgR49PbjaO-txnr7eQdy2uR4oc4te/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1izTFEUONZJC4VfqGa7Hh84BQoTbhF0md/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/17igLJ4oOf3qIP7IAZXoZUf_yA3jn1V2u/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1XqOjXVYJ-SH6A9J95eZZndxci1dO4yc_/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/13g-8zE3D6Jfy3jNpHU6QIk0nJm80_LTd/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/10GV0hJtkLCQBiAnqYMwvh-lXaWJyINI_/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1NkrBUhAvTpRGQApPScVr5eT4HmEvXlVf/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/12DzyniNAO0YLX_JlxQMjKqhO_g7ec-fK/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1pZJvx2L6rqN0HEZ6ZW0QfRX9M-G_7lc4/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/open?id=160jUVN-woX8qVkuf1_oy1HzgKa48bK2g",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1kfW5ZeZla5KVh1CZZd1KyE0qTZ2E96SI/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1Oo01tpSuW2SeeC7c0hh2ATzGu4OgxLzr/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/13EiRnw0cyA63mXLGlXfF1iruoZfsaOg_/view?usp=sharing",
          },
        ],
      },
      {
        id: "physiologie-2",
        semester: 4,
        name: "PHYSIOLOGIE 2",
        description: "Cours et ressources pour PHYSIOLOGIE 2",
        driveUrl:
          "https://drive.google.com/file/d/1uQ53JsY9R1Ih6NgurKDK2PtISbUm5Ntb/view?usp=drive_link",
        courses: [
          {
            title: "Physiologie de l'axe hypothalamo hypophysaire 2020",
            url: "https://drive.google.com/open?id=1C2O04Jy7OhReFrCxcy-hE8OWa5QPYE07",
          },
          {
            title: "Physiologie surrénalienne 2020",
            url: "https://drive.google.com/open?id=1vYcH53UNXN9MbDxmMAsl01Tf_LfcS6Ca",
          },
          {
            title: "Physiologie thyroïdienne 2020",
            url: "https://drive.google.com/open?id=1cUmwmI9iPxo82akkY99r0Je99c9V1jNq",
          },
          {
            title: "Système endocrinien 2020",
            url: "https://drive.google.com/open?id=1_lYnN1dXYFlo_qiILy8aC8HYaBN_dHSU",
          },
          {
            title: "Anatomie microscopique rein 2020",
            url: "https://drive.google.com/open?id=147unqrquyVk9WHSq1Hbtvw3poVLFiqmR",
          },
          {
            title: "Cours 1 Filtration glomérulaire 2020",
            url: "https://drive.google.com/open?id=1TraW2nRnBY9pE8k5p3LbpgSSoVU_SEIK",
          },
          {
            title: "Cours 2 Fonctions tubulaires",
            url: "https://drive.google.com/open?id=1PDPSAaJ6khlD13pGVur8XJcQNfwqiHes",
          },
          {
            title: "Cours 3 Eau et sodium_",
            url: "https://drive.google.com/open?id=1Jni85l8OICGf9krqUIhRQqyrfyYopLsZ",
          },
          {
            title: "Cours 4 Potassium et reins",
            url: "https://drive.google.com/open?id=1gsI5v-tOxDEDUEQXq2XSEdUNYwSPGQ1j",
          },
          {
            title: "Cours 5 Equilibre acide base",
            url: "https://drive.google.com/open?id=19fCdrEf-tbcnb_kCoYeAi17YWHgnt_x6",
          },
          {
            title: "Cours 6 Métabolisme phosphocalcique",
            url: "https://drive.google.com/open?id=1pUCfTmWsvswcoOIeC2O2C8zmqaKa2z8j",
          },
          {
            title: "Physiologie du système nerveux Pr. Maryam FOURTASSI",
            url: "https://drive.google.com/open?id=1Gkg_QFJNeyIKIRazuVcLVvOYKGvgUPBa",
          },
          {
            title: "Motricité Gastrique 2017",
            url: "https://drive.google.com/open?id=1W7fKnqdWj_TafIuIAMiK1v3jGUWgBXt0",
          },
          {
            title: "Physio du Pancréas 2017",
            url: "https://drive.google.com/open?id=1dGBTcprfHHvcEg-69xH7J8Ye1IZawUun",
          },
          {
            title: "Sécrétion et Excrétion biliaire 2017",
            url: "https://drive.google.com/open?id=1fG68DO22xNLFMKAZHlxZHR8wnRdaWRBR",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1uQ53JsY9R1Ih6NgurKDK2PtISbUm5Ntb/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1XhItsl4-jQO1DXBEweQSz4cm3rFZuRoO/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1Pxr5ek6FMLVxczXSFHZBSeDQyelIM9RL/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1bURjQWM4E9hEXZpDUliyNkaKPCBuClg1/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1uTbweTtaKqyUa47N_cZDGw2My-5TUScV/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1Z1LssGxq938pSDZiQpyz7rtoFl4dRSCf/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/11P4a5jiQJEBKqJqlMdTCARZhpwp6Ot_v/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1PHVIY5_fUrhFgvFOtziKgtm5mDj8-cdz/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1VyaaUSlQR7qrv-VTcYxMhqdS3Q5lxLg5/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/14E_XZI9A5_1if_jy6A8Lfj1wT8UxG9IA/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1ijFKWPr3jWaAPWOdXn6CNn3lXo6MeDlU/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/18Dj92sYZSe9DcLk6G4RLQ95P3eT5mN02/view?usp=sharing",
          },
          {
            year: "2017",
            title: " Sr 2017 ",
            url: "https://drive.google.com/file/d/1cXmlsNoYDf1RaqYbpqdrx4KJqThErs8Z/view?usp=sharing",
          },
        ],
      },
      {
        id: "hematologie--fondamentale",
        semester: 4,
        name: "HEMATOLOGIE  FONDAMENTALE",
        description: "Cours et ressources pour HEMATOLOGIE  FONDAMENTALE",
        driveUrl:
          "https://drive.google.com/file/d/1Csr8a_Uanf1GJYqf9v7jtCISj66feS4C/view?usp=drive_link",
        courses: [
          {
            title: "Cours Intégral d'hématologie Pr Seddik 2020",
            url: "https://drive.google.com/open?id=1w2aUR9uLoqJyxdJOwiIvmFEGNjchtDty",
          },
          {
            title: "Coagulation 2020",
            url: "https://drive.google.com/open?id=1N6-fhC6RfOD0e9ALUocw9-WCrR-zKRcj",
          },
          {
            title: "Système RH 2020",
            url: "https://drive.google.com/open?id=17dDjYUGwIhKKCUpTVhqhEjSfbEgLe5d0",
          },
          {
            title: "Hématopoïèse 2016",
            url: "https://drive.google.com/open?id=1OrB7AIdowsCaEasvMUe6S8BylBDgZsCr",
          },
          {
            title: "Erythropoièse 2017",
            url: "https://drive.google.com/open?id=1VbHberknQHbEDDY9huxHmHt9-NU3hFnF",
          },
          {
            title: "Erythropoièse et Fer 2017",
            url: "https://drive.google.com/open?id=15Q8LSnqSUVFsBKptFqKesqwsTZh4MTs9",
          },
          {
            title: "Hemoglobine 2017",
            url: "https://drive.google.com/open?id=1NcymOOQyn9B6DD2xxKgfaTEwKPEyVzW-",
          },
          {
            title: "Hémolyse 2017",
            url: "https://drive.google.com/open?id=10RMQgS2q9v7w-9SpOPTKUPbAJt6W2BUE",
          },
          {
            title: "Vitamines B12 B9 2017",
            url: "https://drive.google.com/open?id=113LeQw4KAtJ1XpU22BvnWQ69DjdmV2Lb",
          },
          {
            title: "Granulopoïèse 2017",
            url: "https://drive.google.com/open?id=1qYubljBE4WS5kvIyQjAKRuvaKPXOe1zi",
          },
          {
            title: "Lymphopoièse 2017",
            url: "https://drive.google.com/open?id=1BL-iXdo-tqa2WluB-TBSnI1d-cC05niP",
          },
          {
            title: "Monocytopoièse 2017",
            url: "https://drive.google.com/open?id=1QvZqIKwvrFlU_CQ7m9s0zolQAb_NxRu2",
          },
          {
            title: "Megacaryopoièse 2017",
            url: "https://drive.google.com/open?id=1BVm7l86ndvLy_Sig9Dh-yeaolYSPbDgt",
          },
          {
            title: "Hémogramme 2017",
            url: "https://drive.google.com/open?id=1eV1xC6g9NmhLyAHpVvdyP1SOLlMHHyrA",
          },
          {
            title: "Système ABO 2017",
            url: "https://drive.google.com/open?id=1b18sWujGafKH365xoD4HZzM8ttvo27-j",
          },
          {
            title: "Systèmes immunogènes 2016",
            url: "https://drive.google.com/open?id=1kL6MUlmUUDO3TOXTD1GpVgOTuABeHarI",
          },
          {
            title: "Hémostase 2017",
            url: "https://drive.google.com/open?id=1fRCksj0gPHL47f3qpwIJGVixS9UnKDdE",
          },
          {
            title: "ITEM 178 TRANSFUSION SANGUINE",
            url: "https://drive.google.com/open?id=1zTI8a-1bKKPBaYJDhkwT2h5UKhriCnb-",
          },
          {
            title: "ITEM 316 HEMOGRAMME",
            url: "https://drive.google.com/open?id=1AfLu1pu3-4awN1H_V9rPNb033FI2TOPX",
          },
          {
            title: "ITEM 339 TROUBLES DE L'HEMOSTASE",
            url: "https://drive.google.com/open?id=1C0-v3YuKHtA_fn62KtlHB9yPgMFae9qW",
          },
          {
            title: "TEM 297 ANEMIE",
            url: "https://drive.google.com/open?id=14aRhDSGRD7RKmj9N0wg-JjxHV-ryrghq",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1Csr8a_Uanf1GJYqf9v7jtCISj66feS4C/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/10EDz9ucDycC1EMRqG5CxOdKug8JWAwzz/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1b7o0tTFAnJVokwNrJ8b9SZVJRkbFFP5j/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1dEaVrxVCzp-at79HSGI4sppHbdSLvIDY/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1w-6g90MXiWuZU4XUWPinP4fh02JzJpem/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1GI-39BhVvVo32i5DAOYXd3IBvRM66H5q/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1_W9IO-Q5WZamV_UhvmVT3BL1RfA_1qTM/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1thdM96Sr6stFY05XkeAmYJ8hPM1oo5Y-/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1V9QqhaDPsI8xoxuP_W8sVeNpxhl9eRFU/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1ZpMl1rQNwnyyn8dmHrdQ85RZrbs3DlWv/view?usp=sharing",
          },
          {
            year: "2017",
            title: " Sr 2017 ",
            url: "https://drive.google.com/file/d/1-CJQnViUP9oqPVM4UQhLu31t65gIsV1P/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1LVQSybOCYt6YJfGsDSfn2_0Y3-aPrKnd/view?usp=sharing",
          },
        ],
      },
      {
        id: "semiologie-2",
        semester: 4,
        name: "SEMIOLOGIE 2",
        description: "Cours et ressources pour SEMIOLOGIE 2",
        driveUrl:
          "https://drive.google.com/file/d/1_DzHgYL8H6tb2qXVA7e-pNBh5nnGHb6Z/view?usp=drive_link",
        courses: [
          {
            title: "Aménorrhée Pr H. Saadi",
            url: "https://drive.google.com/open?id=1m3aYATQf3qWmjK7At3mCbPCROJu5ZEDj",
          },
          {
            title: "Leucorrhées Pr H. Saadi",
            url: "https://drive.google.com/open?id=1WHJfp9gWTRe4_Y0Q6G-_udNko0Zme_DY",
          },
          {
            title: "L'examen gynécologique Pr Mimouni",
            url: "https://drive.google.com/open?id=18PXnaApsvsnE2naVQa1jJ5Uqvl0OQt_m",
          },
          {
            title: "Les douleurs pelviennes de la femme 1 Pr Mimouni",
            url: "https://drive.google.com/open?id=1aruNr2tDQAyKXS4saRJ7R7beCR70uyp0",
          },
          {
            title: "Les hémorragies génitales Pr Mimouni",
            url: "https://drive.google.com/open?id=1CKBN79krRf4hyS_4XsvDB1IElPY50Tzc",
          },
          {
            title: "Sémiologie Thyroïdienne",
            url: "https://drive.google.com/open?id=15MYYd2k1bR-uHYkSkWSxY9rO_hm1l0B9",
          },
          {
            title: "Sémiologie Gonadique",
            url: "https://drive.google.com/open?id=1lbKglNvj6BNu6bLxOEM-XZQKMHevwzwa",
          },
          {
            title: "Sémiologie Hypophysaire",
            url: "https://drive.google.com/open?id=1RXVAqYdjWKsZUatYv8EYJVc6C-Lg278-",
          },
          {
            title: "Sémiologie Surrénalienne",
            url: "https://drive.google.com/open?id=1DrzINbslSExRbtB3fn7_daOIFiLE13fU",
          },
          {
            title: "Sémiologie hématologique",
            url: "https://drive.google.com/open?id=1GwKFLSQx3pwTknzI_ENpFEpSFviKV_Ul",
          },

          {
            title: "Diagnostic d'une splenomegalie",
            url: "https://drive.google.com/open?id=19Enstn4Sb_JJGIwckMo6EPFELHDbBqDo",
          },
          {
            title: "Conduite à tenir devant une adénopathie",
            url: "https://drive.google.com/open?id=1vCxESpFc6AXx25rLAdPT9JwnAKDMysFD",
          },
          {
            title: "CAT+hématurie",
            url: "https://drive.google.com/open?id=1Hvd9dhfjGU1-YN-_DPWwIUL2juUdf_4J",
          },
          {
            title: "Insuffisance Rénale Aigue",
            url: "https://drive.google.com/open?id=1HSYIQxOcmDcJbxX3ov2zgqC8do3r0t_E",
          },
          {
            title: "Insuffisance Rénale Chronique",
            url: "https://drive.google.com/open?id=1c_VlzfSHkp79Rtj_xqucDKDak4C6PK0P",
          },
          {
            title: "Les oedèmes",
            url: "https://drive.google.com/open?id=1dFjuhH54feIsPXXQkeLNmak5DX0CVoIE",
          },
          {
            title: "Protéinurie",
            url: "https://drive.google.com/open?id=1tkKIJjTkidnUELqxH1U4WaU5LEYiuqbM",
          },
          {
            title: "Sédiment urinaire",
            url: "https://drive.google.com/open?id=1w7ubJltYohbwRh6ZI0OTbvoB0grIHcJg",
          },
          {
            title: "Sémio néphrologique",
            url: "https://drive.google.com/open?id=1a5eVR9GuWecceeq4yVSPgvDPLgOayuVi",
          },
          {
            title: "Syndrome Néphritique",
            url: "https://drive.google.com/open?id=14oSnZ5fgsGfo_N8df3gnjBU_0Avo9r4w",
          },
          {
            title: "Syndrome néphrotique",
            url: "https://drive.google.com/open?id=1RH9WCq7IUkrZN1DC_sHQ0hNZ3jlZ7Um7",
          },
          {
            title: "Présentation cours",
            url: "https://drive.google.com/open?id=1lLQLDG_xAJIuafvCTV7RT7alHbsfh5E_",
          },
          {
            title: "Hypertension Intracranienne",
            url: "https://drive.google.com/open?id=1VJ8RwYMgboc4Kj2ut9NPoU9LBBSqKPEw",
          },
          {
            title: "Syndrome méningé",
            url: "https://drive.google.com/open?id=1ZFATdt5MYVmh3t3MoJnvgxttpO9OQ9yg",
          },
          {
            title: "Syndrome Parkinsonien",
            url: "https://drive.google.com/open?id=1RJZSN77h6LFOV0T4d5I_h37XjBUxeoo_",
          },
          {
            title: "Les Troubles anxieux",
            url: "https://drive.google.com/open?id=1Kx9cfvT2hYWMsx82DC7811vfOakxf0V6",
          },
          {
            title: "Syndrome delirant",
            url: "https://drive.google.com/open?id=1I2QoQJlrSBatOq-t58z-oB2aKf-loNKk",
          },
          {
            title: "syndrome hallucinatoire",
            url: "https://drive.google.com/open?id=1wsx20xBQtkfmdbw9YD3GR9VgqcXRalpS",
          },
          {
            title: "Obsessions",
            url: "https://drive.google.com/open?id=175q_ZfyGlVutP_KD5qd3rmsyzhnfky8o",
          },
          {
            title: "Syndrome dissociatif",
            url: "https://drive.google.com/open?id=14sYA6SQulVJCO42z__7kyzXJsUlDIWFT",
          },
          {
            title: "Troubles de langage",
            url: "https://drive.google.com/open?id=1-lx_PPFNKtPY50n0UFh6cf-pfz50FrWi",
          },
          {
            title: "Les inféctions urogénitales",
            url: "https://drive.google.com/open?id=1c_nu3cHOUiLccCQwD5umuqyG6y1IGfP-",
          },
          {
            title: "CAT devant un gros rein",
            url: "https://drive.google.com/open?id=1hzaJiE3xgXjsU_A1cy5f1F3uq_860S1z",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1_DzHgYL8H6tb2qXVA7e-pNBh5nnGHb6Z/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/14etI6s2PXzlyIwhOS356bdlrnITFMX6-/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1YOMGt67eTf5dOBN8qi3rSctR2tuOmj-_/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1dM2iuTw_T0DuBliK6rwp1nQn56TCJCxV/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1EcrqqYcyVAq5iSM6MQCRE5AmETvhvntX/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1IGN1VQNDghheX7zJc3xfeOYosgRqFDiY/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1ddsCywrX-0gidmktsDkoJXGkoI7rOpyj/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1PGJyiw5BhcKxLlS44x75N4D6nUiLCjvZ/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1q4WJL824qSnK3Nx88bONxd3l1WaTiY6r/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1M1u2wEVkcOr4zWlkYobyq153tFX99m4g/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1VvFvOPLdZCytu93j_y40bLwz8uKHzvN3/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/15M6k6smBFdstrSNsUB99IZjnh4f-OEAO/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1cTm2diTteYqRSczpEDzNod5Rl0ve7h06/view?usp=sharing",
          },
        ],
      },
    ],
  },

  "3emeannee": {
    description: "3ème Année",
    modules: [
      {
        id: "parasitologie",
        semester: 5,
        name: "PARASITOLOGIE",
        description: "Cours et ressources pour PARASITOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1rqlnLRSDUXkWlXIZa_ImMOjOFyk88muM?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1l3j310I-wDw4AO0fWIUX7aUxgmBtTKMA/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/10z6zxdvDn8k427B61mOsdMEbRQjZCLZO/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1aE4KVWpNmXZApb-yAJF7_KdXT8C8M4sg/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1cULghtiw-ulh06y1rA8gtIl3uBkJ1Ds1/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/119hXAboFtevsXUu1v8jhUsstKKU4uLra/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1d80ZcgBlZMH8qlTC7AtVadG-e0dWAfTu/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/181ki9pBTCdjh-HUfpxAoZaXYIzuorTj7/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1nf7Nw77SZ42YGWDG78YCUXoGCTAQX7Z2/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2020",
            title: "SN 2020",
            url: "https://drive.google.com/file/d/1XvPbyKTIcXvcsKgEA9WlkOOETvgD0iCD/view?usp=sharing",
          },
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/1lzKJdpN89w2DxWkkj30nTQ5Ocxkb84mB/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr 2019",
            url: "https://drive.google.com/file/d/1Uvvi8wGW3UnShO-QKJK2JQ6wtBsCURYX/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018",
            url: "https://drive.google.com/file/d/17thra-RgOfSh1JxGD5V8Nh0ol8WCH53u/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/1-FtaYuO2qtwViGtf_4R-vdVyXvlupBW-/view?usp=sharing",
          },
          {
            year: "2017",
            title: "SN 2017",
            url: "https://drive.google.com/file/d/1HFFxgO4Kx2YwHVEPSaqvv63nkpUfO5PC/view?usp=sharing",
          },
          {
            year: "2017",
            title: "Sr 2017",
            url: "https://drive.google.com/file/d/1ASUPUd5SjfIR3obWIizu-H8L_N8ad0M0/view?usp=sharing",
          },
        ],
      },
      {
        id: "pathologies-infectieuses",
        semester: 5,
        name: "PATHOLOGIES INFECTIEUSES",
        description: "Cours et ressources pour PATHOLOGIES INFECTIEUSES",
        driveUrl:
          "https://drive.google.com/drive/folders/1rWxWuoX-0jG_05ijwmnxQzHMZalATiOk?usp=sharing",
        exams: [
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1aE4KVWpNmXZApb-yAJF7_KdXT8C8M4sg/view?usp=sharing",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/17145x0OrGzN5QhHVRZvBTZByh6MoHlnZ/view?usp=drivesdk",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1cULghtiw-ulh06y1rA8gtIl3uBkJ1Ds1/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/119hXAboFtevsXUu1v8jhUsstKKU4uLra/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1d80ZcgBlZMH8qlTC7AtVadG-e0dWAfTu/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/16aROeKVByydHWpYB9PA1m8eLRDxky0__/view?usp=sharing",
          },
          {
            year: "2017",
            title: " Sr 2017 ",
            url: "https://drive.google.com/file/d/1ZHi7JlWqtIIRxVgTWKePS1Xh_005Hy6d/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2020",
            title: "SN 2020",
            url: "https://drive.google.com/file/d/1XvPbyKTIcXvcsKgEA9WlkOOETvgD0iCD/view?usp=sharing",
          },
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/1lzKJdpN89w2DxWkkj30nTQ5Ocxkb84mB/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr 2019",
            url: "https://drive.google.com/file/d/1Uvvi8wGW3UnShO-QKJK2JQ6wtBsCURYX/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018",
            url: "https://drive.google.com/file/d/17thra-RgOfSh1JxGD5V8Nh0ol8WCH53u/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/1-FtaYuO2qtwViGtf_4R-vdVyXvlupBW-/view?usp=sharing",
          },
          {
            year: "2017",
            title: "SN 2017",
            url: "https://drive.google.com/file/d/1HFFxgO4Kx2YwHVEPSaqvv63nkpUfO5PC/view?usp=sharing",
          },
          {
            year: "2017",
            title: "Sr 2017",
            url: "https://drive.google.com/file/d/1ASUPUd5SjfIR3obWIizu-H8L_N8ad0M0/view?usp=sharing",
          },
        ],
      },
      {
        id: "pharmacologie",
        semester: 5,
        name: "PHARMACOLOGIE",
        description: "Cours et ressources pour PHARMACOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1j3HkNB__11-b95QDGzJJX06grUJ5_9N6?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1HdDr9VcUUs7-IfYGKyG0qT57tvPaTCg5/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1YZi6Cx6jdcsxtuGnTPDic_PBzcL9w34n/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/19M3nS8UAXAYpPeZnF5QolEMP4KYTBBOB/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1Va531X1rIIDzMSXK2mChrUAZ4AICoswG/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1DBghKsF7vTFhMaKH6ouv6wUzlxDFhULK/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1Onfy2RsxmcjRIjhdjoBV_JBSn2X1b9SE/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1hkJfsjbXA_ANPivD0ElBDuLC6jYUcVDB/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1IySvI3jUbLB9XExURib5mv87t-yDBGow/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1uR8AwcJG9qy04jB81ojqPiTDXLWeggQs/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1umVxoMUlq-2Ud9tZFla0xaMUGg3Lr4QX/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1vdc-Ul6jF2lmWtwNJc1bGAnA6ewSzdSC/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/10jxzy6ZbIXQg5mdfde78UVI7CKs089jf/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1QAjCwCJlCGl4pNq1zs86D3E9kCIeZB5l/view?usp=sharing",
          },
          {
            year: "2017",
            title: " Sr 2017 ",
            url: "https://drive.google.com/file/d/1bEHV4j10Xl32zK6_WDMzkygGzKUONMbT/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1IDt3nrNuBQcUwt0MgzkYMOhad64MknYI/view?usp=sharing",
          },
          {
            year: "2016",
            title: " Sr 2016 ",
            url: "https://drive.google.com/file/d/1teBucU_8dNvR4Ni_SnzzVdVYAymYpJ4I/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1icRNVqkFQQhY5NdIJjpaLgN7XA3-ivwJ/view?usp=sharing",
          },
          {
            year: "2015",
            title: " Sr 2015 ",
            url: "https://drive.google.com/file/d/1ST5Mn04Q_pWdW_57VmqWK_lCPeURmxQ8/view?usp=sharing",
          },
        ],
      },
      {
        id: "radiologie",
        semester: 5,
        name: "RADIOLOGIE",
        description: "Cours et ressources pour RADIOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1kLKxqYW86Xl9KiVAOj36RdwngZ7BIXK_?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1X4k8DrCwTwDf2qlv01Bz2ObqtPrOAkRy/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1Pm9x_eGaRjfsl83PqM72f1xWp3g5r6it/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1vx2DMBTBXDvc_wkrrLzHa2vXfZWSvsFx/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1I0IqVhnEpsx2DjXeU-6SHG-1eQ4iUBso/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1ma9HVHLkozCfDuy2XFOSjHZTTbc0mt0l/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1lxU6D_jcJJBLoSfgC8p3pB4xB-DhW8IY/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1CY9k6JHK6yLE25qYFLnZFWmtUwtTZhN3/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: "SN 2019",
            url: "https://drive.google.com/file/d/13UWQGOvjtoam3pR4facN5ufz2eemMTIs/view?usp=sharing",
          },
          {
            year: "2019",
            title: "Sr 2019",
            url: "https://drive.google.com/file/d/1KL12Xwy2KhMToEi8ERRLfJ0ItTj82a9d/view?usp=sharing",
          },
          {
            year: "2018",
            title: "SN 2018 ",
            url: "https://drive.google.com/file/d/1wJr2ecNUomiqlfNmzwkjay1fH77qNV5y/view?usp=sharing",
          },
          {
            year: "2018",
            title: "Sr 2018",
            url: "https://drive.google.com/file/d/11t3jhDrkUxRiim_ZQlcsKfTaLciovugj/view?usp=sharing",
          },
          {
            year: "2017",
            title: "SN 2017",
            url: "https://drive.google.com/file/d/1pMeE4uC-5SOyKY9zuC85jNZMdlnJq0NX/view?usp=sharing",
          },
          {
            year: "2017",
            title: "Sr 2017 ",
            url: "https://drive.google.com/file/d/1gaZ20xuWXsU1IMDzWo89FkdMOfv4kDKD/view?usp=sharing",
          },
        ],
      },
      {
        id: "apg",
        semester: 5,
        name: "APG",
        description: "Cours et ressources pour APG",
        driveUrl:
          "https://drive.google.com/drive/folders/1w5XG2_Wos94U5JBeF6ppu1mQln0iQd0h?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1KsE6WE4dAZIQoZfSK_5EpfxPv1oCKddL/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1mg4aW7pcvqqIcfKoPH23wRQojf3Y55GN/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1IC2Kd4wTnJu0lyZfyL_waUjtMT9libRQ/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1KXi8EebwG3LRBiQyVahxoyuJHNXngBRQ/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1aWq1s-3kkavGqNK3Yt9s3W8Ojvsr2YSo/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1DazHAOVxjFGC94N3CTBEbn_bpgfkts_U/view?usp=sharing",
          },
          {
            year: "2016",
            title: " Sr 2016 ",
            url: "https://drive.google.com/file/d/1E9DgcQa-iPquwk0X2uYiE6DIIuIIBZUw/view?usp=sharing",
          },
        ],
        corrections: [
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1DErKezEmDDzE0PIgsr-dIZbwEK6FjmTd/view?usp=sharing",
          },
        ],
      },
      {
        id: "pathologies-respiratoires",
        semester: 6,
        name: "PATHOLOGIES RESPIRATOIRES",
        description: "Cours et ressources pour PATHOLOGIES RESPIRATOIRES",
        driveUrl:
          "https://drive.google.com/drive/folders/1SIRZzfzje9kk5F_uAKxisQVjzRwyg8Hy?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1rR47gxAUCTAWmEgHoFZeW2rne6HMEJba/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1bqdA4gkD2sI5ghpQtwyJU1ByhAnajYUB/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1Qu2TbRfrqMaqG30JWPYbxjnlDK84gYQw/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1ciM7NIMpaDTPCxkzJKk1BGLDqsztjFq8/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1IMmjPVwKLD9s13Jc-pfINc08Wpb1L4ZS/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1U9IUhKKM1PKfvK5DSM1rSriAXba_RU-s/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/14sBNFGA5PzoVEZka8uKizLACvWVMpnq1/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1lEHpOrWIOw2OHuR25-omdDSOx9OAxnor/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/19iosZjUgWUPDKSmFcuSVZuI6DeLItksR/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1OZgJ6x-8ElJI-OmGIuC1ZWCN5GEQyv1j/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1luweEKo650QsiN3HeCVHE4p14JoPjuHB/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/18JSbbgqxYq9VBpolKQ-n2jbDFTsCC88Y/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1RRVYsyPfKEpNkPVIyIeSVgOPxOfnlXAc/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1HmhvUecxc6nDvnukOAZvlKxaoeyis_Pc/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1h2pimUmtgZ4CQicCOj3TLBh6ZbOrdxMM/view?usp=sharing",
          },
        ],
      },
      {
        id: "pathologies-digestives",
        semester: 6,
        name: "PATHOLOGIES DIGESTIVES",
        description: "Cours et ressources pour PATHOLOGIES DIGESTIVES",
        driveUrl:
          "https://drive.google.com/drive/folders/169Siy6Xy7MerFUcQfBdpYX21CenQJxbm?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/18SNjdJVJxdnfZji8py17dbOvipZAAUCd/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1IbUd8pWwuYE5ry0xIOEq90HwcD0I8ZER/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1mygvhbXXT7gHtPjvdcK2BZTtv2Wj2DDO/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1dQ92A20yKPpsz8E49qfoULsORGR3DDhZ/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1x1JRtQSik2-OBNGmLM6nXl4BVddsDbIA/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1uLlT7d5rCQyLLzeum0mOcOkMJvO8wAS_/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1n-zcygFCvfZYhYdJi_tPZhV0eDA_oj8N/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1wbS8lChoX5plJVJiQPOO650apoIxvilq/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1gIqybRE_FYsfIwo8Pigq2BXhbt9Cbq0H/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1KGZSmV6UlAC24AGrhdvZFoT4k0-FBCyw/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1BcjI6003OWMxn-o9X0puj8YQAxDeiRxS/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/16MGc8qkSsdxLxNLi48GPkZ8GYhWHGSa8/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1DOffeMxQSoMDM0vxzarK0bX4GAI08V7g/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1ABlqocjjyBXFkuMXroPVUJbf0-Ph51Bt/view?usp=sharing",
          },
        ],
      },
      {
        id: "pathologies-cardio-vasculaires",
        semester: 6,
        name: "PATHOLOGIES CARDIO-VASCULAIRES",
        description: "Cours et ressources pour PATHOLOGIES CARDIO-VASCULAIRES",
        driveUrl:
          "https://drive.google.com/drive/folders/1Y9Kjf_KuVjS40XVu23RSKv2CrWqDkTpn?usp=sharing",
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1uFMheqY6A3N7sppcRQIaB7oOund_GOIR/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1WbJm_u87CjIznteeoVGfKkHfDKhGYOFc/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1BbrnAMcnB8psY_HsEasmhVvA_yfmL67l/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1F9tDcKUu4GASH1t8zHZIJOtEqIR-oEU-/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/18j6QO0XLojCiaRgGT0oTZebt_Sow5NlE/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1x_BZYJRr35mAbXBrigIqwiS_LQxAHu8P/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1e5gFkpSXMbORaMJErS6XdaG8OOgOh4qr/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1CTxcM1J4Hy4fwR0-MnYzK4G2CRrxnpi-/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1HnotnBNxFx1MqshdseTCOlfKxKg-7HNJ/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1VYkL9iranpFw4jv6KbcfNiPZA7IMV_cz/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1sBqP5WS5Tq23XesbHIzx3OgmeknTJ1Lu/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1GP2hSDQ0XlPIuG3nxLU9PH24Obm0Tmck/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1SFfxLPHo3RvuOBfYzD9pag-nPnlHKfpq/view?usp=sharing",
          },
          {
            year: "2012",
            title: " QROC 2012-2014 ",
            url: "https://drive.google.com/file/d/1MuT_yuNKuChTvUO-DYjyItH5aOyLhZi3/view?usp=sharing",
          },
        ],
      },
    ],
  },

  "4emeannee": {
    description: "4ème Année",
    modules: [
      {
        id: "endocrino--amp--dermato",
        semester: 7,
        name: "ENDOCRINO ET DERMATO",
        description: "Cours et ressources pour ENDOCRINO ET DERMATO",
        driveUrl:
          "https://drive.google.com/drive/folders/12vNZaHTC2Q7El7SXa2Y19-AoPS4xsqty?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/12vNZaHTC2Q7El7SXa2Y19-AoPS4xsqty?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/153NXGvB0PZxcyutIgAJB8faxOd3Ej0_c?fbclid=IwAR0rmbD4UaaOFdPL8ToHAKHgFo7tLYQhdiQwm5rw1IeirWowQg7dO6fJ4XM&sort=13&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1aEVDJ_1U5IGUI6G7nKHZBdWXR8zRDN8j/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1ioUOlhLQ4XmZKStfZ65xwun9M07wbt-b/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/16orx0DDgNDTMBZIZOr4F7J5-ECvUKihT/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1L6p5bB_3Dra0UB9z59iPEsDNv7aoUCfk/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1xQXcZXC0cjg74SoAeZK2yh4WWgnpysWi/view?usp=sharing",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/15Zng2fxgY5ZgOHmIsswlLBvehC3KaWhT/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1MhnYbg7xfpc4o--wIGDs3s_9cUnu-vr-/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1goZF_C_Qn7EpNNIt99z49qxGSqdAL5Lu/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1wsN9FE7WKdns0gbPTwFE7SWRZmIViqkq/view?usp=drive_link",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1_uab85a5DBLukNfufN4h-D1SlZhsx3Tq/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1mIa5sfHXuN_iw73JM4IWC8b4NFO6CZma/view?usp=sharing",
          },
        ],
      },
      {
        id: "dermato-2014-2018",
        semester: 7,
        name: "DERMATO 2014-2018",
        description: "Cours et ressources pour DERMATO 2014-2018",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/12vNZaHTC2Q7El7SXa2Y19-AoPS4xsqty?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/153NXGvB0PZxcyutIgAJB8faxOd3Ej0_c?fbclid=IwAR0rmbD4UaaOFdPL8ToHAKHgFo7tLYQhdiQwm5rw1IeirWowQg7dO6fJ4XM&sort=13&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2018",
            title: "SN",
            url: "https://drive.google.com/file/d/1_F9LiwbQYo5LJFWk5efEQVbdOkygs0Tc/view?usp=sharing",
          },
          {
            year: "2017",
            title: "SN",
            url: "https://drive.google.com/file/d/1So5xZYPyANs2PUJOpda5-RGdNW_FjX1_/view?usp=sharing",
          },
          {
            year: "2017",
            title: "Sr",
            url: "https://drive.google.com/file/d/1WfcIyN7c_56OwdzghBUwU8Xep-KGe-Dz/view?usp=sharing",
          },
          {
            year: "2015",
            title: "SN",
            url: "https://drive.google.com/file/d/1Mgv8nx-wG246mos9H2zJMAb0NKbnZoL0/view?usp=sharing",
          },
          {
            year: "2014",
            title: "SN",
            url: "https://drive.google.com/file/d/1aRBzt9lcRHtTfC33ZUqllC1sagY3jOwh/view?usp=sharing",
          },
          {
            year: "2014",
            title: "Sr",
            url: "https://drive.google.com/file/d/1SXIUtVsZj5QWMfaZ5YlnnpIiM66imK3_/view?usp=sharing",
          },
        ],
      },
      {
        id: "onco-hematologie",
        semester: 7,
        name: "ONCO-HEMATOLOGIE",
        description: "Cours et ressources pour ONCO-HEMATOLOGIE",
        driveUrl:
          "https://drive.google.com/drive/folders/1sbz1Smvb7BDbFdbvuYwaz8KY6bZoHrmz?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1sbz1Smvb7BDbFdbvuYwaz8KY6bZoHrmz?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/153NXGvB0PZxcyutIgAJB8faxOd3Ej0_c?fbclid=IwAR0rmbD4UaaOFdPL8ToHAKHgFo7tLYQhdiQwm5rw1IeirWowQg7dO6fJ4XM&sort=13&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1UrLBQliW2Ud52h54rK7qOigXEsrKal4B/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1OY_OwCJ95OUx1Vtp_dx8y0_PRg3AZ4PE/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1CSsKpMWy9QNY5CARtmh09vJkdBa6uhn-/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1BU5Q1NyFwMBa48G7HhlQyd1PNdz9mY8B/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/12Z6np3D80LYHIyDI4HiQPYDb0dxM_v9K/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1lzG3s_7TCKWRKsoINdtINaJIc5mCY5Ja/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/17K4fykrB_neDgPChmQPNfgHf7756dDcp/view?usp=sharing",
          },
        ],
      },
      {
        id: "pathologie-du-systeme-nerveux",
        semester: 7,
        name: "PATHOLOGIE DU SYSTEME NERVEUX",
        description: "Cours et ressources pour PATHOLOGIE DU SYSTEME NERVEUX",
        driveUrl:
          "https://drive.google.com/drive/folders/1DGQdG_oGXYvqWGN0k0fBErJ6a974MnNm?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1DGQdG_oGXYvqWGN0k0fBErJ6a974MnNm?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/153NXGvB0PZxcyutIgAJB8faxOd3Ej0_c?fbclid=IwAR0rmbD4UaaOFdPL8ToHAKHgFo7tLYQhdiQwm5rw1IeirWowQg7dO6fJ4XM&sort=13&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1ApRdqCVRQJTF7FoKr0nyJVb5hrfhXnmC/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/11BDyCdiejjKBCIFWEUTk6GpwJzVXIpE3/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1q6l4ud6EilQWpQrTMieBMVohrVYBRpNy/view?usp=drive_link",
          },
          {
            year: "Drive",
            title: " Exm Blanc ",
            url: "https://drive.google.com/file/d/1-jdEz_rA0nnAF9k01S_DpTarxpIHv8TH/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1OQ-8RzOgBkIGqXHSjVas5PRxqWlpS5yx/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1tKjxuueXybOACXKnbFB5nVYXnFX0cLx3/view?usp=sharing",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1R74ZqCeflsVfXSaSSM8QtwA8SNsy3JiC/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1h_zHKexc0m-Ox2ORNY0dt_le457oH1ay/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1UDqAxcLxWu3ri7vi3fSNOGTwy-OP2RLQ/view?usp=drivesdk",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1iPGiBIm6I2yVwlQEB6GrWMX3RSKZ8RMV/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1PvGZAJVdLJPYDyaSt6O84EF96B2jhi2g/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1kf2h-V5FKwLBUyiZ-jBs6nFMGMFxqCH1/view?usp=sharing",
          },
        ],
      },
      {
        id: "app-locomoteur",
        semester: 8,
        name: "APP LOCOMOTEUR",
        description: "Cours et ressources pour APP LOCOMOTEUR",
        driveUrl:
          "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&amp;usp=drive_open&amp;sort=13&amp;direction=a",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&usp=drive_open&sort=13&direction=a",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1HTEivV239ZEzA6N7XAZmpj6Ue60dwXC7?fbclid=IwAR1L6AWlor3gczhJCzuBpTfs-hBnMxCZfB6L6I1GIRaMfyf0YnZZzoftV1M&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1KDVEpHfc3ZvD4KVRQ1WGrK3lxqmFc0u5/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/14bWyZ5Cye5frVyMdvBqG0W7fGS-ahLmj/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1BsrQ0yh5Lsx19VbclJY9hJE7rHhJCAuK/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1-IqCZIaQ3enaxZ7tlC_JXWvvYwo3O78e/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1OELB-C-wzNE8vCSDnTDt0nIWblubG3cz/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/14zY9rI3dWhiidJyAhHodKkl2I7aVPC_m/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/17RFXqVb39O0FnDyNnVlxMoi6v7d6MDXv/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1oqNhy6dlJA8WOMlnv0pgQZCEig2YDNZ7/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1G62OIB1M70awVc7sSDcV9E676l-wo_5V/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1bgB7C383trUO3_wV9xrXiLF9lDLVEUWF/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1itPU_XX1HpqvSz_bXpjErlFr5BELCxAP/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1B4NsrNGQg2ftl_pFWnA8nFW1XgZr3Anc/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1qZdw22vi8bYS_kkR70WeOtYQaYFGq19J/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1Bg6gW-EITnML7RsCKBtabnRbYXTrBhiI/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1nALyuzXq9Kl4khHXCdV7WS_26UzQHVoU/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1wn0cl73SS8c0I4XoXG9RXTBATNjLCysD/view?usp=sharing",
          },
        ],
      },
      {
        id: "genetique",
        semester: 8,
        name: "GENETIQUE",
        description: "Cours et ressources pour GENETIQUE",
        driveUrl:
          "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&amp;usp=drive_open&amp;sort=13&amp;direction=a",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&usp=drive_open&sort=13&direction=a",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1HTEivV239ZEzA6N7XAZmpj6Ue60dwXC7?fbclid=IwAR1L6AWlor3gczhJCzuBpTfs-hBnMxCZfB6L6I1GIRaMfyf0YnZZzoftV1M&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1MA4BP0_BekXdQaX2qnPj-EWy0cGEb6Cl/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1x2CWu5svTuMnsMugy_b3iayqL_PTaeVZ/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1y50KTBuO_qGRzQk4h8-Dw4p3mbsYLS_G/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/19FPljmd65I23_vJkqDuKLHb9Dwia3TwS/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1gNLMystQ1LoKtqiE7IH9mvrxYxdysrl1/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1xhJPK9g4RnR3iN1GLTsy2I2RI3-F6JS8/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1XuCCELonRh8a_JzqveFhGPM7Dgs7OHz9/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1C_MOKlAGgEad0o8bpcCX5YQx3b5KJnjh/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Sr 2019 ",
            url: "https://drive.google.com/file/d/1gXoindye6vp_i-f8rgc5ucc6swiEBAOc/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1gWx6r27yv0qJ3n8xuSK6184UjD5gy_Pa/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/11sX-TcsSnJZTDzCLJD7ySUyzdGYkL7w6/view?usp=sharing",
          },
          {
            year: "2017",
            title: " Sr 2017 ",
            url: "https://drive.google.com/file/d/1gXiynRUAIa9yYU1BREB30RPZehureVVR/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/134TZVjY5FpjI767X9O8oMdFpw-8TFD0z/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1ZDSXYMCqUTJgPeMNYELZDWnLUMmWo0pq/view?usp=sharing",
          },
        ],
      },
      {
        id: "pediatrie",
        semester: 8,
        name: "PEDIATRIE",
        description: "Cours et ressources pour PEDIATRIE",
        driveUrl:
          "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&amp;usp=drive_open&amp;sort=13&amp;direction=a",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/mobile/folders/1N4FMy4Skiy8R1VtMR4IKF_6VMkWc0b0s?fbclid=IwAR1UTc0ahKz5WEWSayP8tac5wl0zI9WckBcuFeXzmenzgFVYo0RD_5tSDZI&usp=drive_open&sort=13&direction=a",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1HTEivV239ZEzA6N7XAZmpj6Ue60dwXC7?fbclid=IwAR1L6AWlor3gczhJCzuBpTfs-hBnMxCZfB6L6I1GIRaMfyf0YnZZzoftV1M&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1hgQGaJu2pyX6P46GbkuQFh_GGeC0Eo4U/view?usp=drive_link",
          },
          {
            year: "2023",
            title: " Sr 2023 ",
            url: "https://drive.google.com/file/d/1Q59hPNrUtOa_NV--sCrdr5ohz9oebBxr/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1h3Puv-h_n0R4TM0_xnNwLBlKl_iWcdjz/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1ccyVsEZdTkN8on8rl322WDw22Y_qyaRH/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1CsBIJqhWp_NQN5e0dTyAiVpv5wSa1XV4/view?usp=drive_link",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/1OTAYLNWcEiB4j5zxk6ntNS88oquMDKQG/view?usp=drive_link",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1EL3WLAwl0m-cKG9d0SVl_ZYG3PcGp5p1/view?usp=sharing",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1NB7cAAgpoW11eewYSCAvDztG0Ab5Trtu/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/173PG4_4ER4mhuZ4motNXviHmEcUPmg2y/view?usp=sharing",
          },
          {
            year: "2019",
            title: " Excep 2019 ",
            url: "https://drive.google.com/file/d/1dMQf4BaTihQVksrAkAQ1aRWDSmCUO-d4/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1FMPkgCacvmV25oxIu3Xv-WPA75fADIda/view?usp=sharing",
          },
          {
            year: "2018",
            title: " Sr 2018 ",
            url: "https://drive.google.com/file/d/1h3l_ceO7yX5AzUp8Hw-rajq3Vkp0Xa0K/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1OgiNwloLRVvH1Cg4hY88WpyTsafruHuZ/view?usp=sharing",
          },
          {
            year: "2016",
            title: " SN 2016 ",
            url: "https://drive.google.com/file/d/1rYKO-lXIIzpg6zlzcpFubvb7v4xMSyo2/view?usp=sharing",
          },
          {
            year: "2015",
            title: " SN 2015 ",
            url: "https://drive.google.com/file/d/1OW9udTj1v9I1WhZOPY5fkBZ8xAfuFFg8/view?usp=sharing",
          },
        ],
      },
      {
        id: "anatomie-pathologie-ii-et-iii",
        semester: 8,
        name: "ANATOMIE PATHOLOGIE II et III",
        description: "Cours et ressources pour ANATOMIE PATHOLOGIE II et III",
        driveUrl:
          "https://drive.google.com/drive/folders/1FNe7t0bbl4OX9PoSSkzanHnVlFj5zM9W?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1FNe7t0bbl4OX9PoSSkzanHnVlFj5zM9W?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1HTEivV239ZEzA6N7XAZmpj6Ue60dwXC7?fbclid=IwAR1L6AWlor3gczhJCzuBpTfs-hBnMxCZfB6L6I1GIRaMfyf0YnZZzoftV1M&direction=a",
            year: "2023",
          },
        ],
        exams: [
          {
            year: "2023",
            title: " SN 2023 ",
            url: "https://drive.google.com/file/d/1HmqL2pIMlMYXk3yYDL39LlKjPpEeXuvd/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " SN 2022 ",
            url: "https://drive.google.com/file/d/1ttvNiEHiFOVyo0cWcCsmROX9KhQPrSzc/view?usp=drive_link",
          },
          {
            year: "2022",
            title: " Sr 2022 ",
            url: "https://drive.google.com/file/d/1FmUF1hS5s3hW808RdzU0xFRTQlbItcoA/view?usp=drive_link",
          },

          {
            year: "2021",
            title: " SN 2021 ",
            url: "https://drive.google.com/file/d/1zG7jHt16Hn-oO7mQ1gql4WdnbhB-lA6T/view?usp=sharing",
          },
          {
            year: "2021",
            title: " Sr 2021 ",
            url: "https://drive.google.com/file/d/127sff_aADf_Gfjp5Vh6OjfiAKKldTs4e/view?usp=drivesdk",
          },
          {
            year: "2020",
            title: " SN 2020 ",
            url: "https://drive.google.com/file/d/1OdNqSp5XLWpHdeoY5NQXqYROqLkURqNv/view?usp=drivesdk",
          },
          {
            year: "2020",
            title: " Sr 2020 ",
            url: "https://drive.google.com/file/d/1FopgMeusqUY41d8bR9O0ajmSw6YcxPYe/view?usp=sharing",
          },
          {
            year: "2019",
            title: " SN 2019 ",
            url: "https://drive.google.com/file/d/1dFTy8doAxfs9ZzDs3I395c1INtybAvEg/view?usp=sharing",
          },
          {
            year: "2018",
            title: " SN 2018 ",
            url: "https://drive.google.com/file/d/1PPZ6ob-taYjKdyduPMQzRlcnxnii5IW0/view?usp=sharing",
          },
          {
            year: "2017",
            title: " SN 2017 ",
            url: "https://drive.google.com/file/d/1R3-btDmEGGMafbQxXJbiyT3FHuruMmJZ/view?usp=sharing",
          },
        ],
      },
    ],
  },

  "5emeannee": {
    description: "5ème Année",
    modules: [
      {
        id: "sant--publique-ii",
        semester: 9,
        name: "Santé Publique II",
        description: "Cours et ressources pour Santé Publique II",
        driveUrl:
          "https://drive.google.com/drive/folders/1tiGdZI_8VKx8qwbBuXS-kX-bi2hW3xHt?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1tiGdZI_8VKx8qwbBuXS-kX-bi2hW3xHt?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1t58ThJD6b6r132jTHiC9FcZwbsu21K2h",
            year: "2023",
          },
          {
            title: "2023 + audios",
            url: "https://drive.google.com/drive/u/0/mobile/folders/1sCp66Ngu06sn-CDqMJfiHd95DCho-tA2?sort=13&direction=a",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: " [...] ",
            url: "https://drive.google.com/drive/folders/1o6i-S8LZji9PwAVdJNJrtLzK83M9L21M?usp=sharing",
          },
        ],
      },
      {
        id: "synth-se-th-rptq",
        semester: 9,
        name: "Synthèse Thérptq",
        description: "Cours et ressources pour Synthèse Thérptq",
        driveUrl:
          "https://drive.google.com/drive/folders/1d5dT6sb5nesN2z0O4GsgWQjjBlWai7-q?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1d5dT6sb5nesN2z0O4GsgWQjjBlWai7-q?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1qdq70h5oWOGaCjqkCxlCpqQ1RMck6piX",
            year: "2023",
          },
          {
            title: "2023 + audios",
            url: "https://drive.google.com/drive/u/0/mobile/folders/1sCp66Ngu06sn-CDqMJfiHd95DCho-tA2?sort=13&direction=a",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: " [...] ",
            url: "https://drive.google.com/drive/folders/1AqXHmdhfH5E-XORkcPXRQ4HcikQ5v4nY?usp=sharing",
          },
        ],
      },
      {
        id: "urg-r-a",
        semester: 9,
        name: "Urg-Réa",
        description: "Cours et ressources pour Urg-Réa",
        driveUrl:
          "https://drive.google.com/drive/folders/1Wo1zUmEJFMyZgiz6gQ5DF0b4mU8Sxl36?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1Wo1zUmEJFMyZgiz6gQ5DF0b4mU8Sxl36?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/19sDs2NP1dWAerkIhFSjrg9rdleeyoXsZ",
            year: "2023",
          },
          {
            title: "2023 + audios",
            url: "https://drive.google.com/drive/u/0/mobile/folders/1sCp66Ngu06sn-CDqMJfiHd95DCho-tA2?sort=13&direction=a",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: " [...] ",
            url: "https://drive.google.com/drive/folders/13DVg8WmSp6k1ZRwwrvxG5WCPaKTVP6Ld?usp=sharing",
          },
        ],
      },
      {
        id: "psychiatrie",
        semester: 9,
        name: "Psychiatrie",
        description: "Cours et ressources pour Psychiatrie",
        driveUrl:
          "https://drive.google.com/drive/folders/1PjK4Og7YOmKnYO8GV9-XQx-qFnVUjnW0?usp=sharing",
        courses: [
          {
            title: "Cours 2021",
            url: "https://drive.google.com/drive/folders/1PjK4Og7YOmKnYO8GV9-XQx-qFnVUjnW0?usp=sharing",
            year: "2021",
          },
          {
            title: "Cours 2023",
            url: "https://drive.google.com/drive/u/0/folders/1tgL2RXAaO08M55F56pTaddiprl3vBJyh",
            year: "2023",
          },
          {
            title: "2023 + audios",
            url: "https://drive.google.com/drive/u/0/mobile/folders/1sCp66Ngu06sn-CDqMJfiHd95DCho-tA2?sort=13&direction=a",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: " [...] ",
            url: "https://drive.google.com/drive/folders/1Q8YgaovFQh0mMF7n2E3J1moaIIJgJipV?usp=sharing",
          },
        ],
      },
      {
        id: "med-l-gale---med-travail",
        semester: 10,
        name: "Med Légale - Med Travail",
        description: "Cours et ressources pour Med Légale - Med Travail",
        driveUrl:
          "https://drive.google.com/drive/folders/1bya6eBRb-t6Z717_y8i07nQFOIvXNyEW?usp=drive_link",
        courses: [
          {
            title: "Cours 2024",
            url: "https://drive.google.com/drive/folders/1bya6eBRb-t6Z717_y8i07nQFOIvXNyEW?usp=drive_link",
            year: "2024",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "[...]",
            url: "https://drive.google.com/drive/folders/17q83SuuCqyIpJz8odd45WyiUlVZ0L0jn?usp=sharing",
          },
        ],
      },
      {
        id: "gyn-co-obst-triq",
        semester: 10,
        name: "Gynéco-Obstétriq",
        description: "Cours et ressources pour Gynéco-Obstétriq",
        driveUrl:
          "https://drive.google.com/drive/folders/1YNtGg5-gP6Lqpa8LlLy9r2puvsRndSMo?usp=drive_link",
        courses: [
          {
            title: "Cours 2024",
            url: "https://drive.google.com/drive/folders/1YNtGg5-gP6Lqpa8LlLy9r2puvsRndSMo?usp=drive_link",
            year: "2024",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "[...]",
            url: "https://drive.google.com/drive/folders/1tHquMotnMILXHUW-rbXb2AgSvmS7Kvwk?usp=sharing",
          },
        ],
      },
      {
        id: "orl",
        semester: 10,
        name: "ORL",
        description: "Cours et ressources pour ORL",
        driveUrl:
          "https://drive.google.com/drive/folders/164VuQNi8SVIDH2rxqNKW4tebQcdKM3pM?usp=drive_link",
        courses: [
          {
            title: "Cours 2024",
            url: "https://drive.google.com/drive/folders/164VuQNi8SVIDH2rxqNKW4tebQcdKM3pM?usp=drive_link",
            year: "2024",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "[...]",
            url: "https://drive.google.com/drive/folders/1FoHyjQg-8LQJ7pCm4LxHp-vfr7L6oDQa?usp=sharing",
          },
        ],
      },
      {
        id: "ophtalmo",
        semester: 10,
        name: "Ophtalmo",
        description: "Cours et ressources pour Ophtalmo",
        driveUrl:
          "https://drive.google.com/drive/folders/164VuQNi8SVIDH2rxqNKW4tebQcdKM3pM?usp=drive_link",
        courses: [
          {
            title: "Cours 2024",
            url: "https://drive.google.com/drive/folders/164VuQNi8SVIDH2rxqNKW4tebQcdKM3pM?usp=drive_link",
            year: "2024",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "[...]",
            url: "https://drive.google.com/drive/folders/1aklWtB0NVmvqbFcJ1TAj1aAQHXizEhF0?usp=sharing",
          },
        ],
      },
      {
        id: "uro-n-phro",
        semester: 10,
        name: "Uro-Néphro",
        description: "Cours et ressources pour Uro-Néphro",
        driveUrl:
          "https://drive.google.com/drive/folders/1Ce9CUvItSRRykWpWsVENAirqZVx_WGl0?usp=drive_link",
        courses: [
          {
            title: "Cours 2024",
            url: "https://drive.google.com/drive/folders/1Ce9CUvItSRRykWpWsVENAirqZVx_WGl0?usp=drive_link",
            year: "2024",
          },
        ],
        exams: [
          {
            year: "Drive",
            title: "[...]",
            url: "https://drive.google.com/drive/folders/1vbiV9g6QRG2zr5t-O31KCNJXl-CI9qgD?usp=sharing",
          },
        ],
      },
    ],
  },

  internat: {
    description: "INTERNAT",
    modules: [
      {
        id: "internat-anatomie",
        name: "Anatomie",
        description: "Cours et ressources pour Anatomie",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-biologie",
        name: "Biologie",
        description: "Cours et ressources pour Biologie",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-pathologies-medicales",
        name: "Pathologies médicales",
        description: "Cours et ressources pour Pathologies médicales",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-pathologie-chirurgicales",
        name: "Pathologie chirurgicales",
        description: "Cours et ressources pour Pathologie chirurgicales",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-urgences-medicales",
        name: "Urgences médicales",
        description: "Cours et ressources pour Urgences médicales",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-urgences-chirurgicales",
        name: "Urgences chirurgicales",
        description: "Cours et ressources pour Urgences chirurgicales",
        driveUrl:
          "https://drive.google.com/drive/folders/1TqSUjJxM9ZuIkidhQScVxgx6Z6a7BhQZ?usp=drive_link",
      },
      {
        id: "internat-netter-atlas",
        name: "Netter ATLAS d'anatomie humaine",
        description: "Ressource anatomique",
        driveUrl:
          "https://drive.google.com/open?id=1znneSPSzBy367xeLG6om1dVCPz_HQXW1",
      },
      {
        id: "internat-grays-anatomie",
        name: "Grays anatomie pour les étudiants",
        description: "Ressource anatomique",
        driveUrl:
          "https://drive.google.com/file/d/1Y9VRjfGKuGOeJbRX_zZxbXIK8QqrTM6C/view?usp=sharing",
      },
    ],
  },
};

export default yearsCompleteData;
