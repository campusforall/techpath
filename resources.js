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
  { title: "2015 A/L Engineering Technology", type: "Past Paper", subject: "Engineering Technology", year: 2015, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Ff5mjT7omwdMa7naknG8ODNuVUG9rbyo/view?usp=drive_link" },

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

  { title: "2025 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ANu1nlm06_F0F_9EjJ7HLAmu8Ip6YzS_/view?usp=drive_link" },
  { title: "2024 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/153rFPQy__i51xyqQuBa6ut2d7AfaFxQe/view?usp=sharing" },
  { title: "2023 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1pDKbIzfl4eMjysxQhmRmZKrn9F5rcbl5/view?usp=drive_link" },  
  { title: "2022 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1kP1bzvOseFiPjxZRnQcb6grKNsOqPi3t/view?usp=drive_link" },
  { title: "2021 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1HxUBqKEXgZ88jBQgEHZ0rfqYZTrSWQTF/view?usp=drive_link" },
  { title: "2020 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1uFJ8Fq-XBb8_TjbevQnDxSNUxKQzVEIA/view?usp=drive_link" },
  { title: "2019 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1lgWxPyYg3NJv-CHQhj17cJ8SHaW3i2Y9/view?usp=drive_link" },
  { title: "2018 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/18lCc0cB2GtTe7JHxC4d4LRIbt3JotQ86/view?usp=drive_link" },
  { title: "2017 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2017, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1vsHgEt9_fIGVS5uPu6XrntYDXuxZ3G1j/view?usp=drive_link" },
  { title: "2016 A/L BST Paper", type: "Past Paper", subject: "Bio Systems Technology", year: 2016, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1DYFCvtR_9y9JgGRH6XHT6LUbxgbtOfyn/view?usp=drive_link" },

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
  { title: "SFT 2022 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1KVrx_3_1EScYEKS8-GaJIZJKP6ZDEwLY/view?usp=drive_link" },
  { title: "SFT 2021 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/12L3ZGOp7QmzQHWlR_P-d4cdUX-xYY8Jy/view?usp=drive_link" },
  { title: "SFT 2020 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WIUQiR9GgclFEKJjNhYQwSpp9v_a2rk2/view?usp=drive_link" },
  { title: "SFT 2019 MOE Paper", type: "Model Paper", subject: "Science for Technology", year: 2029, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/16IRNEvXu2RgzIaINWAAh0w9ocKvObQXk/view?usp=drive_link" },

  { title: "BST 2021 Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/u/4/folders/1fQyhDYWGPST0aAv9UBALB5kgXH_0saMh" },
  { title: "BST 2020 MCQ Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1-Qwe2XRimsLZkh3Y0BbrLvV1it-RFKPc/view?usp=drive_link" },
  { title: "BST 2024 MCQ Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1gXd4nlytwxlixDoe-QEYPFnqFLFlqt2m/view?usp=sharing" },
  { title: "BST 2024 Structured Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/17IOnI4NW7DBNoijcKlLVa3QkfwOBusFN/view?usp=drive_link" },
  { title: "BST 2023 MCQ Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1j_K-B3mBPiZuGJQXyJuymRXz4AhHwmYf/view?usp=drive_link" },
  { title: "BST 2023 Structured Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/15_Tf9F9u_pkbVEvAKw540BgPw6zTAL2Q/view?usp=drive_link" },
  { title: "BST 2019 MCQ Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1HlJz01MjZt5QO2N4IaFbAGoAv8johwVp/view?usp=sharing" },
  { title: "BST 2019 Structured Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1s2zjNfTBCsZVI0Da8dwVHkz1f1u76-kZ/view?usp=drive_link" },
  { title: "BST 2019 Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Ca8M_1ZTsEF3ftHhcoS0BIKRyAJzE-67/view?usp=drive_link" },
  { title: "BST  Full Model Paper 1", type: "Model Paper", subject: "Bio Systems Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1omqLxOuTb4M1Ts7EMmjWCYd7twaBTDhw/view?usp=sharing" },
  { title: "BST 2018 Essay Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/18Cx4EibGnPcZVFUphTgfavPibGqvEGLJ/view?usp=drive_link" },
  { title: "BST 2018 MCQ Model Paper", type: "Model Paper", subject: "Bio Systems Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1OLBoFRWJax0kxoJW2uPyUXl00_arCGK1/view?usp=sharing" },
  { title: "BST Full Model Paper 2", type: "Model Paper", subject: "Bio Systems Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/10Wf7DlDYeiutD2lUQQQLCUJVcljTMgx7/view?usp=drive_link" },
  { title: "BST Full Model Paper 3", type: "Model Paper", subject: "Bio Systems Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1jXF6UUPwDwvEyG6LmJ80teVLieyQPjgD/view?usp=sharing" },

  // Question-wise Papers
  { title: "ET MCQ Topic-wise Collection", type: "Question-wise Paper", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" },
  { title: "SFT Physics Structured Essay Guide", type: "Question-wise Paper", subject: "Science for Technology", year: 2025, medium: "English", driveUrl: "https://drive.google.com/" },
  { title: "ICT Python Programming Question Bank", type: "Question-wise Paper", subject: "Information & Communication Technology", year: 2025, medium: "English", driveUrl: "https://drive.google.com/" },

  // Province Papers
  { title: "2022 Western Province Paper 01", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YIdFJdDc62y6T0KuuY-0gQDaEaedU5qa/view?usp=drive_link" },
  { title: "2022 Western Province Paper 02", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/13dsngIpNlxlNDdQhXXXJV4moOM_MobD-/view?usp=drive_link" },
  { title: "2022 Western Province Paper 03", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1NmeXlG-ek2Ag638IyzpnkGYR8LiG61Lk/view?usp=drive_link" },
  { title: "2022 Western Province Paper 04", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YS0twv0JN9TUU5bCmnInQEM7I_5DrqHC/view?usp=drive_link" },
  { title: "2022 Western Province Paper 05", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/19LBHPuV-C9PO-KY5idpG5kNaX5iQ_xlC/view?usp=drive_link" },
  { title: "2022 North Central Province Nana Sayura", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1xaDtX5wzTT6EIZA_aPs3BXt-iBRe4xnV/view?usp=drive_link" },
  { title: "2025 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1rOPJAuymTQGBzUScT2gZWAS3DviFDTU_/view?usp=drive_link" },
  { title: "2025 Western Province Gampaha Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1PCY960o1BosF6tyrv1_tkaucv4bBXzVY/view?usp=drive_link" },
  { title: "2025 Central Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1c2yZZmKx0JvbeAg9ay41R-ZQt-wzfava/view?usp=drive_link" },
  { title: "2024 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1JfXfmxqvi2XBeFdQiJQajvyhooVWckoi/view?usp=drive_link" },
  { title: "2024 Western Province Kaluthara Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1AZ-lJiiKEmdTj_AULK-km1o8NnhNAXQC/view?usp=drive_link" },
  { title: "2023 Southern Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1nsMq-Zg9Q3ZZt_AON7rqUvgnH0nu74T8/view?usp=drive_link" },
  { title: "2023 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/17dIApdDaqpCWWsdzOYYHRFBHVNuMPG1q/view?usp=drive_link" },
  { title: "2022 Sabaragamuwa Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_2jPsW8FNG2TgSoHaLARL4SWIIcLHML3/view?usp=drive_link" },
  { title: "2022 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_DA2iN3sTQuNOrvS4iR_OhXn5uxmfd63/view?usp=drive_link" },
  { title: "2022 North Western Province Paper 2 ", type: "Province Paper", subject: "Information & Communication Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ug5eSCRCThfFRK92XshCFNKdRQlDygxQ/view?usp=drive_link" },
  { title: "2021 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ZzHagDFCv_7tsi-oGCEokQh02n8hBoLG/view?usp=drive_link" },
  { title: "2020 Piliyandala Zonal Education Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1k2lZGY5MrjHnAvWuHqcoXHk4YRg7SoP1/view?usp=drive_link" },
  { title: "2020 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_kw4ONhOgzZmdN4xQbi_idI7GPvZVM5h/view?usp=drive_link" },
  { title: "2020 North Western Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1_kw4ONhOgzZmdN4xQbi_idI7GPvZVM5h/view?usp=drive_link" },
  { title: "2020 Sri Jayawardanapura Zone Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ZNPYfjk6p4dfNQx92rAN-fO2dAx_WOM1/view?usp=drive_link" },
  { title: "2019 Central Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1ffBJSuwgZ7NrKMICbK1-gjNb6BYwpdjc/view?usp=drive_link" },
  { title: "2018 Central Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2018, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/15VlkK8SUdgiwzC2aEpJAnxRNlKxFhFc4/view?usp=drive_link" },
  { title: "2017 Kuliyapitiya Zone Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2017, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1M3vVndzLcrvJz760F5vO9KSTbzk96uBi/view?usp=drive_link" },
  { title: "2016 Sabaragamuwa Province Paper ", type: "Province Paper", subject: "Information & Communication Technology", year: 2016, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1blGbmZGyBjJiyJ8yV_cRtmkJUHXDTq0i/view?usp=drive_link" },


  { title: "2024 ET Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YrxCaLSMSRUAcqvm28pd_MqfJWm2p4dY/view?usp=drive_link" },
  { title: "2024 ET Southern Province ", type: "Province Paper", subject: "Engineering Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1oHswZa1j-qq--bIeoDZI4lRthX8pDsVG/view?usp=drive_link" },
  { title: "2024 ET Central Province ", type: "Province Paper", subject: "Engineering Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Bwd3Y3MnEryGtzGmLcoIBc-UrmDUGZVG/view?usp=drive_link" },
  { title: "2023 ET Southern Province ", type: "Province Paper", subject: "Engineering Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1dVWWzI5vAGM71lK35J_1j2DBsCEdi00J/view?usp=drive_link" },
  { title: "2023 ET Sabaragamuwa Province ", type: "Province Paper", subject: "Engineering Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WpPArIdGshOYNh9P9TQgnZasHcqV82JH/view?usp=drive_link" },
  { title: "2022 ET Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YniuLDxRuA7t3_IfYSswT5YeS0sXmDFM/view?usp=drive_link" },
  { title: "2022 ET Uva Province ", type: "Province Paper", subject: "Engineering Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WqhLKWRddJdplrVFy1bNGQ-yqkbk4y7X/view?usp=drive_link" },
  { title: "2022 ET North Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1n184mx1pWkSzqIXM3qNzpdw1CKXKqtw2/view?usp=drive_link" },
  { title: "2021 ET North Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1yh1sFrBdEOFjWZlgCpifbCOyZw-B8boX/view?usp=drive_link" },
  { title: "2021 ET North Central Province ", type: "Province Paper", subject: "Engineering Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1WxVkzyLUDVN8fLYw_-I5NkM7GmHrLUoX/view?usp=drive_link" },
  { title: "2021 ET Gampaha Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1IXkMg2gKgViupLbTddj0zAukIlPvEZJO/view?usp=drive_link" },
  { title: "2020 ET North Western Province ", type: "Province Paper", subject: "Engineering Technology", year: 2020, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Y_hKpWEBYysqQDo2L1oiLhKAR5gHfJFo/view?usp=drive_link" },
  { title: "2019 ET Southern Province ", type: "Province Paper", subject: "Engineering Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1sYH0837w3fkOmBiQ6t_HpX853jUfP4Q7/view?usp=drive_link" },
  { title: "2019 ET Central Province ", type: "Province Paper", subject: "Engineering Technology", year: 2019, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1JXB5SagQPtRPNmrXYJATJJzlSDmd43fy/view?usp=drive_link" },



  { title: "2023 SFT Southern Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1BuIqMRPhBxWGPThBq-Se2KWqe_O9RxQs/view?usp=drive_link" },
  { title: "2025 SFT Gampaha Western Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Cb1Lag6_EDIGIbQgj5t7uWru_l7i_tq5/view?usp=drive_link" },
  { title: "2025 SFT Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1AqaG4Af5EPX3SevuFkUaZkZtUw3wTWjq/view?usp=drive_link" },
  { title: "2024 SFT Uva Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1oHWSrabV8pkMZ-FtJ5IQuTas1sqEJm92/view?usp=drive_link" },
  { title: "2024 SFT North Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Lzb5qh4MaWD4AbehNGSTZe_CLWrduONm/view?usp=drive_link" },
  { title: "2024 SFT Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2024, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1mGw67QDyVXQZswWODsxoTB4HF1lYOHA2/view?usp=drive_link" },
  { title: "2023 SFT Uva Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1Y7O2KHq0emh9o-3KUMnUac1oLRuBU3y0/view?usp=drive_link" },
  { title: "2023 SFT Southern Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1NetwGI2ZKksEtYBN-uVB5f54tySE1bw8/view?usp=drive_link" },
  { title: "2023 SFT Sabaragamuwa Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/17hFpVwF5GznWgQWZ-2W4-ZU6LJFQJrGy/view?usp=drive_link" },
  { title: "2023 SFT North Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2023, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1O_wv6RqrB_teFYgcn4O3v5nuBwORLkRB/view?usp=drive_link" },
  { title: "2022 SFT Western Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1AvXM9D5Da4RNK17kuwzqErmOIRNbEagL/view?usp=drive_link" },
  { title: "2022 SFT North West Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/12zdXzPtpV2EHVnV5HICrzhovrYSTqdHO/view?usp=drive_link" },
  { title: "2022 SFT Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2022, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1YTzjAFDSkNaFSuqUnQABle7W95eTtkoJ/view?usp=drive_link" },
  { title: "2021 SFT North Western Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1uLB4SwYiXM145Z8s8HoQW0UWdw81CtMj/view?usp=drive_link" },
  { title: "2021 SFT Grade 12 North Western Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1jbg90iTXIMQxOKPXUgmBo2bMuty2dZxd/view?usp=drive_link" },
  { title: "2021 SFT Central Province Paper", type: "Province Paper", subject: "Science for Technology", year: 2021, medium: "Sinhala", driveUrl: "https://drive.google.com/file/d/1umL3Lv3dUqEviycFdUMa5ZRygAoMvj4k/view?usp=drive_link" },



  // Extra Notes
  { title: "ET Water & Garbage Management", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1qLwhjOu3FOpk984BmSGcGHqJfMIFK4k6?usp=drive_link" },
  { title: "ET TDS", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1hluECpfAi-1vvKFLwpP-rWR6T3toPRMZ?usp=drive_link" },
  { title: "ET Safety", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1-Tw1G2GQU7ZiPwQpLycr2BipUFI09NKP?usp=drive_link" },
  { title: "ET Production", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/19BG1LpYWdqt2WhZ2tK34TYj_Y6t44YYz?usp=drive_link" },
  { title: "ET Measurments", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/18zgd6WPcmSVkCFPyzIwBGGyAWloInkUX?usp=drive_link" },
  { title: "Land Survey", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/13IQ3FdRgcN5zkdAgz2-DJzJUoKBZ_pJy?usp=drive_link" },
  { title: "ET Introduction", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1DO3ubH7FcEaWja5CWgmne9zUm-6EVU-z?usp=drive_link" },
  { title: "ET Fluids", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1nLm7nriXu_sbVJmWM-k7rISFw2Z-8Z2S?usp=drive_link" },
  { title: "ET Entrepreneurship", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/140W9C4-s0iHYdyluPXaMvkZQ2zsIjuxd?usp=drive_link" },
  { title: "ET Electronics", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1DBEGZ503K8aJ2gjUa4SpG4P1G417jxQG?usp=drive_link" },
  { title: "ET Electrical Machines", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1krVHeUxzJSIH4gHk9sa-4NF8T6V6uWa6?usp=drive_link" },
  { title: "ET Electrical", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/18k6AXE0HOyCC0nGwmvkB4prnIvpvHoZi?usp=drive_link" },
  { title: "ET Drawing", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1HI6Cxfk_tp4eC4OjsfElkVQDyD9D3IUH?usp=drive_link" },
  { title: "ET Civil", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1EG6OIxAejKFWdQL-OaOI9mHepYaAKA1k?usp=drive_link" },
  { title: "ET Motion", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1HurQD7kNAj7lFQat9R_mPotwe2yu7Dl6?usp=drive_link" },
  { title: "ET Automobile", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1Nz1JZSeyaou1rxkMV8kCt_NnSY54PxF0?usp=drive_link" },
  { title: "ET Standards and specifications", type: "Extra Notes", subject: "Engineering Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/drive/folders/1czvZlhfRcS0WRLjZgRbv2x02vVyfP1Ac?usp=drive_link" },


  { title: "SFT Chemistry Core Revision Tutorial", type: "Extra Notes", subject: "Science for Technology", year: 2025, medium: "English", driveUrl: "https://drive.google.com/" },
  { title: "ICT Networking Systems Revision Summary", type: "Extra Notes", subject: "Information & Communication Technology", year: 2025, medium: "Sinhala", driveUrl: "https://drive.google.com/" }

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
