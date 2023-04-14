import React, { useRef, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3, Color3, Vector4 } from "@babylonjs/core";

// var texture = new BABYLON.Texture(, scene);
//     mat.diffuseTexture = texture;




var columns = 6; // 6 columns
var rows = 1; // 1 row

//alien sprite
var faceUV = new Array(6);

//set all faces to same
for (var i = 0; i < 6; i++) {
  faceUV[i] = new Vector4(i / columns, 0, (i + 1) / columns, 1 / rows);
}

const SpinningBox = (propss) => {


  return (

    <box
      name={propss.name}

      size={2}
      position={propss.position}
      height={1}
      width={0.75}
      depth={0.25}
      faceUV={faceUV}
      wrap
    >
      {console.log("dataurl from spinning boxes", propss.dataUrl_second)}

      <standardMaterial>
        <texture url={propss.dataUrl_second} assignTo={"diffuseTexture"} />
      </standardMaterial>
    </box>

  );
};

const SceneWithSpinningBoxes = (props) => {
  return (

    <div >
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={(3 * Math.PI) / 4}
            beta={Math.PI / 4}
            radius={2}
          />
          {console.log("dataurl from scenes with spinning boxes", props.dataUrl)}

          <hemisphericLight
            name="light1"
            intensity={50}
            direction={Vector3.Up()}
          />

          <SpinningBox
            name="left"
            position={new Vector3(0, 0, 0)}
            color={Color3.FromHexString("#EEB5EB")}
            dataUrl_second={props.dataUrl}
          />

        </Scene>
      </Engine>
    </div>

  );

}
export default SceneWithSpinningBoxes;
