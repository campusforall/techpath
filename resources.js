const resources = [
  { title: "2024 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1UOJ3N4998R7Gb9WziLuTjG70USajC4qe/view?usp=drive_link" },
  { title: "2023 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1SqtRgJQmXPC3j5b9RQ_5XRdPVUePfimO/view?usp=drive_link" },
  { title: "2022 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1VtZz1GT4FBCUXr7ro_nMtsBtl-AjxQOu/view?usp=drive_link" },
  { title: "2021 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1RgzP_2uXQTSxnkd8q9SDEtV1CD9KxNM_/view?usp=drive_link" },
  { title: "2020 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1jtz5F7cnXaDLWMw_UlQDnVDhkAclgibn/view?usp=drive_link" },
  { title: "2019 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1HvtBoeLIq6ctep1p0BEW73M8yZb1H5lU/view?usp=drive_link" },
  { title: "2018 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/19aYdTkda8wJ1EXSRe1aW0pKS_AlGzGmn/view?usp=drive_link" },
  { title: "2017 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2017, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1hdimBpIZq8VZGAyMkvWCLANoFfA_j52Q/view?usp=drive_link" },
  { title: "2016 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2016, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1J8822yRmbLZv_tdSiI54pKjkcgPikNJ-/view?usp=drive_link" },
  { title: "2020 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Ff5mjT7omwdMa7naknG8ODNuVUG9rbyo/view?usp=drive_link" },

  { title: "2024 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/" },
  { title: "2023 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YCMcMALYYPDCWdhI3XD1fGVxGjjxtehl/view?usp=drive_link" },
  { title: "2022 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1CktRVMFqpd77iLPOfAbstLvqzdVR0NsH/view?usp=drive_link" },
  { title: "2021 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1RjC9qrdJfBkprgaLeRnB0JCAySl44F7x/view?usp=drive_link" },
  { title: "2020 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1qXW7ITxSnXGtSa-UkCGiMlbzt07Kg75M/view?usp=drive_link" },
  { title: "2019 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1R_dHuEQGD1x8YhuO4IdzEyKg9CG9-EVL/view?usp=drive_link" },
  { title: "2018 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_hNStbv73R53Z2wBZXCwEGZj7IX8OBex/view?usp=drive_link" },
  { title: "2017 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2017, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/16dRSEea9y1nESoLhvo1hpYOJzytfNLEk/view?usp=drive_link" },
  { title: "2016 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2016, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1bC2Bt16L8W_BFnukq231C5EiIYt9ARtV/view?usp=drive_link" },
  { title: "2015 A/L Science for Technology", type: "Past Paper", subject: "Science for Technology", year: 2015, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1QUvBaExwFFq-kc5SWcJL8NFtGp7W0ezk/view?usp=drive_link" },

  { title: "2024 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/14bJoeKfQCkigUSOxi82acDTzEjlIyAcO/view?usp=drive_link" },
  { title: "2023 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1nyEUEMjh4hVYugC121YHOA84u331EICd/view?usp=drive_link" },
  { title: "2022 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/17k9DOL5FiRupKQP8PfD6YNbFhQ7q2_eo/view?usp=drive_link" },
  { title: "2021 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1E1KrS7e4fkechTv7mFgPZ49iytliyYEi/view?usp=drive_link" },
  { title: "2020 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ZqUqdiQg3pNFCfRqxV1hGIqCV4vZQonF/view?usp=drive_link" },
  { title: "2019 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1pnmgyJq60U6U9svtt9q4HfvE0olraA1C/view?usp=drive_link" },
  { title: "2018 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/15Tn_OZzVzAVmk52mbcAHw0P_IvKR902G/view?usp=drive_link" },
  { title: "2017 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2017, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1jb5MKYcwEcrXGIN01T-Gu8ZuWShWedW5/view?usp=drive_link" },
  { title: "2016 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2016, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1-TJkjjVBgBsTxP4yQGO_21imrWgmCcwh/view?usp=drive_link" },
  { title: "2015 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2015, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1uVsyS8xhX_EoaPd-9-ZQp3CmO4Vakp1Y/view?usp=drive_link" },



  // Text-Books

  { title: "SFT Physics part 1", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1vBDwewm4r6E22kGNpVTzdcLFa5ACmE_w/view?usp=drive_link" },
  { title: "SFT Physics part 2", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1rrob0pCACIPBIqp275bfVAi7wyJw8bo_/view?usp=drive_link" },
  { title: "SFT Physics part 3", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1hU6u3jeKfQItGcwWfVhoJx94QYkrrftk/view?usp=drive_link" },
  { title: "SFT Biology Book", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1xamAXDafP02VIyEj2S6k38USEERKlDJa/view?usp=drive_link" },
  { title: "SFT ICT Book", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1hAK-sp1AvmV3VI5AS0bTOFLBWIlOyhPx/view?usp=drive_link" },
  { title: "SFT Maths part 1", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/15Gg6oJRKNBnvH_cjXA1_IMe4O-rS7QXN/view?usp=drive_link" },
  { title: "SFT Physics part 1", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ZfzZGuH52rXwPabJL2DUKoUEffnKZpO6/view?usp=drive_link" },
  { title: "SFT Chemestry part 1", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1DzZ-bmfQ0g3s1qmF8CNu75gcVZE3D1ar/view?usp=drive_link" },
  { title: "SFT Revision Exercies", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1EbQrQVkWrWG848QY_F5_UOBVpVUXvRGC/view?usp=drive_link" },
  { title: "SFT Bio Resources", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1l6cBDwopps8gywRVt3fiIksuAEpJq70G/view?usp=drive_link" },
  { title: "SFT Practical Book", type: "Textbook", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WH6eVNYk5tWpstwk8rghxUT_wZqSxwtm/view?usp=drive_link" },

  { title: "ET Automobile", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1dmWaVHQDT18JbNasKZsikHbyDQbkc17_/view?usp=drive_link" },
  { title: "ET Electrical Machines & Power Systems", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1dzZa5GGu4nnCovcfR_LmDCGRFjOolK3P/view?usp=drive_link" },
  { title: "ET Electronics", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1e1BDsLnWmuNBjM1n8rbBPUIxd52q4JVg/view?usp=drive_link" },
  { title: "ET Electricals", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1dq9KdDSh05vUROO3TmlM6FHx010mpwUx/view?usp=drive_link" },
  { title: "ET Entrepreneurship and Management", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1rCSLaL8NwcX_k2vizxjiNqy0vj5gSIbv/view?usp=sharing" },
  { title: "ET Drawings", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YXvW1sv1JAV3cJhdCV0k58XbC4wSAquq/view?usp=drive_link" },
  { title: "ET Civil", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1drHHqWVbhWi0qmz0Q_RdGUopOYFFWz_v/view?usp=drive_link" },
  { title: "ET Land Surveying", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1dxfu4_JPb_gxjv0RheAC9nmrL_dlLGNi/view?usp=drive_link" },
  { title: "ET Motion & the Power compression", type: "Textbook", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1QPhQvpNohHOw7_T1hNt6aJOxr29PX_Ff/view?usp=sharing" },

  { title: "ICT All lessons Part 1 (Non official)", type: "Textbook", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1xHPOYcnmrDwwIIEjas9j4TQW4qmkopGG/view?usp=drive_link" },
  { title: "ICT All lessons Part 1 (Non official)", type: "Textbook", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1XSSkuw35-D1XEBx3isHoL5Vz6TxSBrO8/view?usp=drive_link" },

  // Teachers Guide

  { title: "ET Teachers' Guide - Grade 12", type: "Teachers' Guide", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/14hLWNoDTk_Fuu-Mjk-gW8LV4ncEkcvW1/view?usp=drive_link" },
  { title: "ET Teachers' Guide - Grade 13", type: "Teachers' Guide", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1QUe6sjOSFASDsE_vH974OcS4-UG3ypi4/view?usp=sharing" },
  { title: "BST Teachers' Guide - Grade 12", type: "Teachers' Guide", subject: "Bio Systems Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1oSnvVnA5nEFtmuQwc6NSN0niljfhac-3/view?usp=drive_link" },
  { title: "BST Teachers' Guide - Grade 13", type: "Teachers' Guide", subject: "Bio Systems Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1EV-2GA9Qo7afN8ikoWeZwvUDQXs0IOmM/view?usp=drive_link" },
  { title: "SFT Teachers' Guide - Grade 12", type: "Teachers' Guide", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1kN9ucGhWDMBMvQT4awh7S_WafDVy7BJG/view?usp=drive_link" },
  { title: "SFT Teachers' Guide - Grade 13", type: "Teachers' Guide", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1tfeDFfF15US2X_w0oakdUZuVlOgIRECf/view?usp=drive_link" },
  { title: "Agricultural Science Teachers' Guide - Grade 12", type: "Teachers' Guide", subject: "Agricultural Science", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1LCt39P_224YkfXYSsyxoCM6Sf7Ogjhfj/view?usp=drive_link" },
  { title: "Agricultural Science Teachers' Guide - Grade 12", type: "Teachers' Guide", subject: "Agricultural Science", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1qET_mj9A8ensUMyG3P_QZI19bsStsESR/view?usp=drive_link" },
  { title: "ICT Teachers's Guide - Grade 12", type: "Teachers' Guide", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Dzy8VLoDzG6Uw5d6uf03mpcSipN2Aw9R/view?usp=drive_link" },
  { title: "ICT Teachers's Guide - Grade 13", type: "Teachers' Guide", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_4rsM484_vGV3PSZgOGX20bWL2zX6tgu/view?usp=drive_link" },

  // Model papers

 
  
  { title: "ET 2025 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1lzuGvfO4Q8ld3ysfshcUcvvXwt0FoHgC/view?usp=sharing" },
  { title: "ET 2024 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/12jlUaQmh4uMJKZRzSscSM7agUvCCuwAv/view?usp=drive_link" },
  { title: "ET 2023 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1tFHYZ0Ct1pe29G8p9fmjD16WN-4V1dx6/view?usp=drive_link" },
  { title: "ET 2022 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/14gHAUeOmdjpcYmhSv06AJifYNJEH2G3S/view?usp=drive_link" },
  { title: "ET 2021 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WCqq9dGdZAMNu-9ei5UF76_vXmfnWCRh/view?usp=drive_link" },
  { title: "ET 2020 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YWMNrQNUenPaOs2A2KVMRHEtyvIcxf4Z/view?usp=drive_link" },
  { title: "ET 2019 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/19b8cEyudRJXDJiUaTrgmRMe4ZkaBiw3o/view?usp=drive_link" },
  { title: "ET 2018 MOE Paper", type: "Model Paper", subject: "Engineering Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1W1lgkZoMcBrid60Dlxql8LE7MOgoHZ7t/view?usp=drive_link" },

  { title: "SFT 2025 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1EUP258dnpnuaQ1dwXpOXo55Cg9v0pRXc/view?usp=drive_link" },
  { title: "SFT 2024 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1O188na0II9RydfxfqC7g-LtTmA14Y8-P/view?usp=drive_link" },
  { title: "SFT 2023 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1A3RYasGxVoe02IE5ZriAN6HJa1HfSKjM/view?usp=drive_link" },
  { title: "SFT 2022 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1KVrx_3_1EScYEKS8-GaJIZJKP6ZDEwLY/view?usp=drive_link" },
  { title: "SFT 2020 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WIUQiR9GgclFEKJjNhYQwSpp9v_a2rk2/view?usp=drive_link" },




  
  
  { title: "SFT Term Test Collection", type: "Model Paper", subject: "Science for Technology", year: 2025, medium: "Tamil", driveUrl: "https://drive.google.com/" },
  { title: "2024 A/L ICT Paper", type: "Past Paper", subject: "Information & Communication Technology", year: 2024, medium: "English", driveUrl: "https://drive.google.com/" },
  
  { title: "ICT Full Syllabus Model Paper", type: "Model Paper", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" },
  { title: "2024 A/L Bio Systems Technology", type: "Past Paper", subject: "Bio Systems Technology", year: 2024, medium: "English", driveUrl: "https://drive.google.com/" },
  { title: "Bio Systems Technology Grade 12 & 13", type: "Textbook", subject: "Bio Systems Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" },
  
  { title: "BST Full Syllabus Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2025, medium: "Tamil", driveUrl: "https://drive.google.com/" },
  { title: "2024 A/L Agricultural Science", type: "Past Paper", subject: "Agricultural Science", year: 2024, medium: "English", driveUrl: "https://drive.google.com/" },
  { title: "Agricultural Science Grade 12 & 13", type: "Textbook", subject: "Agricultural Science", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" },
  
  { title: "Agriculture Full Syllabus Model Paper", type: "Model Paper", subject: "Agricultural Science", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" }
];

const universities = [
  {
    id: "UOR",
    name: "University of Ruhuna",
    shortName: "UOR",
    intro: "University of Ruhuna – එය ශ්‍රී ලංකාවේ ප්‍රධාන රාජ්‍ය විශ්වවිද්‍යාලයක් වන අතර, 1978දී ස්ථාපිත වූ අතර ප්‍රධාන පරිපාලන මධ්‍යස්ථානය Matara වේ. එහි ප්‍රධාන Faculties ලෙස Engineering, Medicine, Science, Fisheries & Marine Sciences, Allied & Health Sciences, Agriculture, Technology, Management & Finance, Humanities & Social Sciences, සහ Art යන ඒවා වේ.",
    logo: "🎓",
    colorClass: "coral",
    courses: [
      { name: "B.Sc. (Hons) in Engineering (Computer Science & Eng)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Information Technology (IT)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Information Technology & Management (ITM)", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Design (B.Des)", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "UOM",
    name: "University of Moratuwa",
    shortName: "UOM",
    intro: "The University of Moratuwa is the leading technological university in Sri Lanka. It is known for producing world-class graduates in Engineering, Information Technology, and Architecture.",
    logo: "🎓",
    colorClass: "coral",
    courses: [
      { name: "B.Sc. (Hons) in Engineering (Computer Science & Eng)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Information Technology (IT)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Information Technology & Management (ITM)", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Design (B.Des)", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "UOC",
    name: "University of Colombo",
    shortName: "UOC",
    intro: "Established as the oldest institution of modern higher education in Sri Lanka, the University of Colombo is renowned for its academic excellence, especially in Computing (UCSC) and Science.",
    logo: "🏛️",
    colorClass: "violet",
    courses: [
      { name: "B.Sc. (Hons) in Computer Science (UCSC)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Information Systems (UCSC)", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Technology (B.Tech) in Science", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "USJ",
    name: "University of Sri Jayewardenepura",
    shortName: "USJ",
    intro: "The University of Sri Jayewardenepura is one of the largest and most prestigious universities in Sri Lanka, boasting a state-of-the-art Faculty of Technology.",
    logo: "🦁",
    colorClass: "yellow",
    courses: [
      { name: "Bachelor of Engineering Technology (BET)", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Biosystems Technology (BBST)", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Information & Communication Technology (BICT)", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "UOK",
    name: "University of Kelaniya",
    shortName: "UOK",
    intro: "The University of Kelaniya is a center of excellence that offers highly sought-after technology degrees tailored to bridge the gap between academic theory and industry needs.",
    logo: "🍃",
    colorClass: "mint",
    courses: [
      { name: "Bachelor of Engineering Technology (BET) in Software Engineering", driveUrl: "https://drive.google.com/" },
      { name: "Bachelor of Information & Communication Technology (BICT)", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "UOP",
    name: "University of Peradeniya",
    shortName: "UOP",
    intro: "Nestled in the lush hills of Hanthana, the University of Peradeniya is Sri Lanka's most scenic university, offering premier academic and research programs in Engineering and Science.",
    logo: "🏔️",
    colorClass: "sky",
    courses: [
      { name: "B.Sc. in Engineering (Computer/Electrical/Civil)", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. (Hons) in Computation & Management", driveUrl: "https://drive.google.com/" }
    ]
  },
  {
    id: "UWU",
    name: "Uva Wellassa University",
    shortName: "UWU",
    intro: "Known as the 'Entrepreneurial University', Uva Wellassa University focuses on value addition to national resources and hands-on technological skills.",
    logo: "💎",
    colorClass: "pink",
    courses: [
      { name: "Bachelor of Technology (B.Tech) in Material Science", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. in Computer Science and Technology", driveUrl: "https://drive.google.com/" },
      { name: "B.Sc. in Industrial Information Technology", driveUrl: "https://drive.google.com/" }
    ]
  }
];
