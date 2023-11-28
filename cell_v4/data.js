var APP_DATA = {
  scenes: [
    {
      id: "0-cell-exterior-p",
      name: "Cell-Exterior-p",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        yaw: 0.6651256364801608,
        pitch: -0.1674601440508532,
        fov: 1.4083983627516938,
      },
      linkHotspots: [
        {
          yaw: 0.11233670017903918,
          pitch: -0.16045611523168013,
          rotation: 6.283185307179586,
          target: "1-cellextjpg1",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.81233670017903918,
          pitch: -0.20045611523168013,
          title: "It Begins...",
          text: "As you're walking to school with your friends, chaos suddenly erupts on the streets around you. Amidst the confusion, a giant amorphous tentacle bursts through the smoke and engulfs you. You find yourself trapped inside a massive single-celled alien organism. Fortunately, its cell structure is similar to the organisms you're familiar with on Earth. Use your knowledge of cell structure to navigate through this alien cell and escape before you're consumed. Your understanding of biology is now your key to survival.",
        },
      ],
      expandHotspots: [],
    },
    {
      id: "1-cellextjpg1",
      name: "cellextjpg1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        yaw: 1.2098005316873301,
        pitch: 0.40672817533250516,
        fov: 1.4083983627516938,
      },
      linkHotspots: [],
      infoHotspots: [
        {
          yaw: 1.5471266404232047,
          pitch: 0.8379120773305146,
          title: "2 - Endoplasmic Reticulum (ER)",
          text: '<span id="docs-internal-guid-f075bc29-7fff-9c4c-ae69-4d5e83332786"><span style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(15, 15, 15); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;"><span id="docs-internal-guid-f64a8ad3-7fff-3b44-e973-bad77ff07e2b"><span style="font-size: 12pt; color: rgb(255, 255, 255); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline;">The endoplasmic reticulum (ER) plays a key role in protein and lipid synthesis.</span></span> </span></span><span id="docs-internal-guid-7a438de1-7fff-f0cc-6723-c9864c381391"><span style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">The ER, a network of membranous tubules, is essential for the synthesis and transport of proteins and lipids. Rough ER, studded with ribosomes, manufactures proteins, while the smooth ER is involved in lipid production and detoxification. It\'s a cellular superhighway, connecting different parts of a cell.</span></span>',
        },
        {
          yaw: 2.534105296445879,
          pitch: 0.8881836343368086,
          title: "5 - Golgi Apparatus",
          text: "<div>The Golgi apparatus is a cell's 'post office,' modifying, sorting, and packaging proteins for secretion. The Golgi apparatus functions as the manufacturing and shipping center of the cell. Proteins and lipids received from the endoplasmic reticulum are further modified, sorted, and packaged into vesicles here. It's like a post office where items are processed and labeled to ensure they reach their correct destination. These vesicles are then transported to various parts of the cell, where they're needed, or to the cell membrane for secretion outside the cell.</div><div><br></div>",
        },
        {
          yaw: -1.2416023848959945,
          pitch: 0.07510733987826512,
          title: "4 - Ribosome",
          text: "<div>Ribosomes are the sites of protein synthesis in the cell.&nbsp; Ribosomes, tiny molecular machines found either floating freely in the cytoplasm or attached to the ER, are the production sites of proteins. They translate genetic information from mRNA into amino acid sequences, constructing the proteins essential for life.</div><div><br></div>",
        },
        {
          yaw: 0.23106272321560972,
          pitch: 0.2567056647566659,
          title: "1 - Mitochondria",
          text: '<span id="docs-internal-guid-ffb42480-7fff-119f-78db-99a964b947ab"><span style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">The mitochondria, often termed the powerhouse of the cell, are crucial for energy production.  </span></span><span id="docs-internal-guid-565c3ccb-7fff-394d-0320-d79b878725cf"><span style="font-size: 12pt; font-family: Roboto, sans-serif; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;">Mitochondria are dynamic, bean-shaped organelles, pivotal in cellular respiration and energy production. They convert nutrients into ATP, the cell\'s energy currency, powering various cellular processes. Their unique structure, with an inner and outer membrane, facilitates the efficient generation of energy.</span></span>',
        },
        {
          yaw: 0.4405475841987272,
          pitch: -1.41458263523910865,
          title: "6 - Cytoplasm/Cytoskeleton",
          text: "<div>The cytoplasm is the jelly-like fluid that fills a cell, and the cytoskeleton is its internal framework, providing shape and support. The cytoplasm refers to the entire region of the cell that is enclosed within the cell membrane, excluding the nucleus. It's filled with a gel-like fluid where all organelles reside, and it's also where many of the cell's metabolic reactions occur. Within this fluid is the cytoskeleton, a dynamic network of fibers that can be quickly dismantled and reassembled to change cell shape, provide cellular support, enable cellular movement, and direct traffic flow within the cell. It's the cell's scaffold, maintaining its shape and anchoring organelles in place.</div><div><br></div>",
        },
        {
          yaw: 1.2975017721619793,
          pitch: 0.3825161342829091,
          title: "3 - Nucleus",
          text: "<div>The nucleus, containing genetic material, is the control center of the cell.&nbsp; The nucleus, encased in a double membrane, is the repository of genetic information in eukaryotic cells. It directs cellular activities by controlling gene expression and orchestrates the growth, division, and differentiation of cells. It's the mastermind behind the cell's functioning.</div><div><br></div>",
        },
        {
          yaw: 2.334105296445879,
          pitch: 0.3825161342829091,
          title: "7 - Lysosome",
          text: "<div>Lysosomes are the cell's 'garbage disposals,' containing enzymes to break down waste and cellular debris. Lysosomes are membrane-bound organelles containing hydrolytic enzymes responsible for breaking down all types of biological polymers—proteins, nucleic acids, carbohydrates, and lipids. These organelles are crucial for digesting excess or worn-out organelles, food particles, and engulfed viruses or bacteria. The lysosome maintains an acidic environment optimal for the enzymes to function. By recycling the cell's waste, lysosomes are fundamental to the cell's health and survival, often referred to as the stomach of the cell.</div><div><br></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: 0.034819576690169995,
          title: "Challenge 5: Protein Structure Jigsaw Puzzle",
          text: "<div>At the Golgi Apparatus, piece together the protein puzzle. Visualize protein structures and their roles in the cell.</div><div><br></div><div>Your journey leads you to the Golgi Apparatus, a central hub for protein sorting. Here, you are tasked with constructing a jigsaw puzzle that mirrors the intricate structure of proteins. This challenge is a hands-on exploration of how proteins are assembled and function within the cell. Understanding this is key to grasping the cell's inner workings. The pieces of the puzzle represent the building blocks of life, and your task is to bring them together coherently.</div><div><div><br/><a href='https://tinyurl.com/4vapw3hp' target='_blank'>*****Quiz #5*****</a></div><br/></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: 0.2112651319423886,
          title: "Final Challenge: Deciphering the Code",
          text: "<div>Use all the clues gathered to decode the secret message in the cytoplasm. Can you crack the code in time?</div><div><br></div><div>Now in the cytoplasm, the final stage of your quest, you must use all the clues you've gathered to decode a mysterious alien message. This is the culmination of your cellular adventure, where each challenge you've conquered plays a part in unlocking the final escape. Your journey through the cell has equipped you with the knowledge and insights needed to crack this code. Will you manage to decipher it in time, or remain trapped within the cell's confines?</div><div><div><br/><a href='https://tinyurl.com/4yfxj6ej' target='_blank'>*****Final Quiz*****</a></div><br/></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: -0.1397241994160423,
          title: "Challenge 4: DNA Video and Embedded Questions",
          text: "<div>Enter the nucleus and explore the world of DNA. Watch a video and answer embedded questions to unravel genetic mysteries.</div><div><br></div><div>Delve into the nucleus, the control center of the cell, where you'll encounter the essence of life itself – DNA. Watch an enlightening video that reveals the secrets of DNA structure and function. Embedded within this visual journey are critical questions. Your answers will illuminate your path through the genetic code and bring you closer to unlocking the cell's mysteries. This challenge is a deep dive into the core of cellular biology.</div><div><div><br/><a href='https://tinyurl.com/6nt5rwu2' target='_blank'>*****Quiz #4*****</a></div><br/></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: -0.31122762262468214,
          title: "Challenge 3: DNA Slide Puzzle",
          text: "<div>At the ribosomes, solve a DNA puzzle to understand genetic coding. Complete the slide puzzle and quiz for DNA insights.</div><div><br></div><div>At the site of protein synthesis, the ribosomes, a complex DNA puzzle awaits. This challenge requires you to piece together the puzzle of life – the DNA molecule. As you align each segment, you're not only solving a physical puzzle but also decoding the genetic language. A subsequent quiz will further test your understanding of DNA's structure and significance. Successful completion is another step towards your cellular escape.</div><div><div><br/><a href='https://tinyurl.com/3mzmyjwe' target='_blank'>*****Quiz #3*****</a></div><br/></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: -0.49458263523910865,
          title: "Challenge 2: Cellular Respiration Interactive Activity",
          text: "<div>Dive deep into the Endoplasmic Reticulum to learn how cells harness energy. Complete the interactive tutorial and quiz on cellular respiration.</div><div><br></div><div>Your next challenge takes you to the bustling world of the Endoplasmic Reticulum, where the intricate process of cellular respiration unfolds.Engage in an interactive tutorial to learn how cells convert nutrients into energy. This is a vital step in understanding the cell's energy dynamics. After completing the tutorial, a short quiz awaits to test your newfound knowledge. Success here is key to unlocking the next part of your escape.</div><div><div><br/><a href='https://tinyurl.com/yxbhnazk' target='_blank'>*****Quiz #2*****</a></div><br/></div>",
        },
        {
          yaw: -2.3882080352112425,
          pitch: -0.68458263523910865,
          title: "Challenge 1: Organelle Function Quiz",
          text: "<div>Embark on a journey to understand the powerhouse of the cell, the mitochondria, through a quiz. Discover how each organelle powers life.</div><div><br></div><div>As you find yourself in the midst of a cellular maze, your first task is to navigate the mitochondria, the cell's powerhouse. Here, you'll be quizzed on the vital functions of various cell organelles. Each question is a stepping stone to understanding how these tiny structures sustain life within the cell. Remember, your knowledge of these organelles is crucial for your journey through this microscopic world.</div><div><div><br/><a href='https://tinyurl.com/486tt8ru' target='_blank'>*****Quiz #1*****</a></div><br/><div><strong>Resources:</strong><br/><a href='https://tinyurl.com/mejkb5an' target='_blank'>5.6: Cell Organelles - Biology LibreTexts</a></div></div><div><br></div>",
        },
      ],
      expandHotspots: [
        {
          yaw: 1.5471266404232047,
          pitch: 0.8379120773305146,
          title: "2 - Endoplasmic Reticulum (ER)",
          text: "The endoplasmic reticulum (ER) plays a key role in protein and lipid synthesis.The ER, a network of membranous tubules, is essential for the synthesis and transport of proteins and lipids. Rough ER, studded with ribosomes, manufactures proteins, while the smooth ER is involved in lipid production and detoxification. It's a cellular superhighway, connecting different parts of a cell.",
        },
        {
          yaw: 2.534105296445879,
          pitch: 0.8881836343368086,
          title: "5 - Golgi Apparatus",
          text: "The Golgi apparatus is a cell's 'post office,' modifying, sorting, and packaging proteins for secretion. The Golgi apparatus functions as the manufacturing and shipping center of the cell. Proteins and lipids received from the endoplasmic reticulum are further modified, sorted, and packaged into vesicles here. It's like a post office where items are processed and labeled to ensure they reach their correct destination. These vesicles are then transported to various parts of the cell, where they're needed, or to the cell membrane for secretion outside the cell",
        },
        {
          yaw: -1.2416023848959945,
          pitch: 0.07510733987826512,
          title: "4 - Ribosome",
          text: "Ribosomes are the sites of protein synthesis in the cell.&nbsp; Ribosomes, tiny molecular machines found either floating freely in the cytoplasm or attached to the ER, are the production sites of proteins. They translate genetic information from mRNA into amino acid sequences, constructing the proteins essential for life.",
        },
        {
          yaw: 0.23106272321560972,
          pitch: 0.2567056647566659,
          title: "1 - Mitochondria",
          text: "The mitochondria, often termed the powerhouse of the cell, are crucial for energy production. Mitochondria are dynamic, bean-shaped organelles, pivotal in cellular respiration and energy production. They convert nutrients into ATP, the cell's energy currency, powering various cellular processes. Their unique structure, with an inner and outer membrane, facilitates the efficient generation of energy.",
        },
        {
          yaw: 0.4405475841987272,
          pitch: -1.41458263523910865,
          title: "6 - Cytoplasm/Cytoskeleton",
          text: "The cytoplasm is the jelly-like fluid that fills a cell, and the cytoskeleton is its internal framework, providing shape and support. The cytoplasm refers to the entire region of the cell that is enclosed within the cell membrane, excluding the nucleus. It's filled with a gel-like fluid where all organelles reside, and it's also where many of the cell's metabolic reactions occur. Within this fluid is the cytoskeleton, a dynamic network of fibers that can be quickly dismantled and reassembled to change cell shape, provide cellular support, enable cellular movement, and direct traffic flow within the cell. It's the cell's scaffold, maintaining its shape and anchoring organelles in place.",
        },
        {
          yaw: 1.2975017721619793,
          pitch: 0.3825161342829091,
          title: "3 - Nucleus",
          text: "The nucleus, containing genetic material, is the control center of the cell.&nbsp; The nucleus, encased in a double membrane, is the repository of genetic information in eukaryotic cells. It directs cellular activities by controlling gene expression and orchestrates the growth, division, and differentiation of cells. It's the mastermind behind the cell's functioning.",
        },
        {
          yaw: 2.334105296445879,
          pitch: 0.3825161342829091,
          title: "7 - Lysosome",
          text: "Lysosomes are the cell's 'garbage disposals,' containing enzymes to break down waste and cellular debris. Lysosomes are membrane-bound organelles containing hydrolytic enzymes responsible for breaking down all types of biological polymers—proteins, nucleic acids, carbohydrates, and lipids. These organelles are crucial for digesting excess or worn-out organelles, food particles, and engulfed viruses or bacteria. The lysosome maintains an acidic environment optimal for the enzymes to function. By recycling the cell's waste, lysosomes are fundamental to the cell's health and survival, often referred to as the stomach of the cell.",
        },
      ],
    },
  ],
  name: "Escape_Room_Cell_V3",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: false,
  },
};
