FOR APPLE USER
Download MicroBlock for MAC https://bit.ly/3plAuLj

goto /Applications/microBlock IDE.app
git clone https://github.com/UpSkillAsia/beetlecar_v1.git  

mv beetlecar_v1 Contents/Resources/app/microBlock-IDE/boards
mv Contents/Resources/app/microBlock-IDE/boards/beetlecar_v1/install/index.js Contents/Resources/app/microBlock-IDE/ 

EDIT /Applications/microBlock IDE.app/Contents/Resources/app/microBlock-IDE/index.html -> change <title>microBlock IDE for UpSkill</title>

EDIT /Applications/microBlock IDE.app/Contents/Resources/app/microBlock-IDE/manifest.json
    Change
     "name": "microBlock IDE for UpSkill",
    "short_name": "microBlock IDE for UpSkill",

