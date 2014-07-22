
	var V3FA = {} || V3FA;

	V3FA.basepath = 'http://va3c.github.io/fgx-aircraft/data/';
//	V3FA.basepath = '../../../../fgx-repos/fgx-aircraft/data/';

	V3FA.addFgxAircraftTab = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.innerHTML =
			'<a href=# id=tabFgxAircraft ><p class=button >' +
				'<i class="fa fa-file-image-o"></i> FGx Aircraft...' +
			'</p></a>';
		tabFgxAircraft.onclick = function() {JA.toggleDialogs(V3FA.FgxAircraftTab); };

		V3FA.FgxAircraftTab = tab.appendChild( document.createElement( 'div' ) );
		V3FA.FgxAircraftTab.style.cssText = 'cursor: auto; display: none; ' ;

		var fileList = '<br>';
		var file, fname;
		for ( var i = 0, len = V3FA.files.length; i < len; i++ ) {
			file = V3FA.files[ i ][0];
			fileList += '<a href=JavaScript:' +
				'V3LI.updateIframe(V3FA.files,' + i + ',V3FA.basepath,"' + file + '",""); >' + file + '</a><br>';
		}

		V3FA.FgxAircraftTab.innerHTML =
			'<p>' +
				'Sourced from <a href="http://fgx.github.io/fgx-aircraft-overview/r4/aircraft-overview.html" target="_blank"></a>FGx Aircraft<br><br>' +
				'Currently supplies over 400 crappy aircraft<br>' +
			'</p>' +
			'<div >' + fileList + '</div>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(V3FA.FgxAircraftTab); ); >Close</a> ' +
			'</p>' +
		'';

	};

	V3FA.files = [
		['14bis/14bis.js',''],
		['21/21.js',''],
		['707/707.js',''],
		['717/717-200-smooth.js',''],
		['717/717-200.js',''],
		['727-230/727-230.js',''],
		['737-100/737-100.js',''],
		['737-200/737-200.js',''],
		['737-300/737-300.js',''],
		['747-200/boeing747-200.js',''],
		['747-400/boeing747-400-jw.js',''],
		['757-200/757-200.js',''],
		['767-300/767-300.js',''],
		['777/777-200.js',''],
		['777/777-200ER.js',''],
		['777/777-200LR.js',''],
		['777/777-300.js',''],
		['777/777-300ER.js',''],
		['787/787-8.js',''],
		['A-10/A10-004-015l3.js',''],
		['A-26-Invader/a26.js',''],
		['A-6E/A-6E.js',''],
		['A24-Viking/a24.js',''],
		['A340-600/A340.js',''],
		['a4/a4-blue.js',''],
		['a4/a4f.js',''],
		['A6M2/a6m2.js',''],
		['Aerocar/Aerocar.js',''],
		['Aerostar-700/aerostar700.js',''],
		['AirCrane/aircrane.js',''],
		['airwaveXtreme150/hgldr_cs.js',''],
		['airwaveXtreme150/hgldr_cs1.js',''],
		['Albatross/albatros.js',''],
		['Allegro-2000/allegro.js',''],
		['Alouette-III/alouetteIII.js',''],
		['Alphajet/alphajet.js',''],
		['AN-225/AN225-003-002d14.js',''],
		['an2/an2.js',''],
		['ANT-20/ant20.js',''],
		['Antoinette/antoinette.js',''],
		['apache/apache.js',''],
		['AR-234/ar234.js',''],
		['Arsenal-VG33/vg33.js',''],
		['Arup-S2/arup-s2.js',''],
		['as332/as332.js',''],
		['ASK13/ask13.js',''],
		['ASK21/ask21.js',''],
		['ASK21-MI/ask21mi.js',''],
		['asw20/asw20.js',''],
		['asw20/wt9_dynamic.js',''],
		['asw20-v1-nl/asw201.js',''],
		['ATR-72-500/ATR-72-500.js',''],
		['Avro-Lancaster/lancaster.js',''],
		['B-17/b17.js',''],
		['B-1B/b1b.js',''],
		['B-24-Liberator/b24.js',''],
		['B-25/b25.js',''],
		['B-36D-Peacemaker/b36d.js',''],
		['B-52F/B-52F-002-027e.js',''],
		['b1900d/b1900d.js',''],
		['b26/b26.js',''],
		['b29/b29.js',''],
		['BAe-125/bae125.js',''],
		['beaufighter/beaufighter.js',''],
		['beech99/beech99.js',''],
		['Beechcraft-Staggerwing/model17.js',''],
		['Bell-222X/bell222x.js',''],
		['Bell-P-39/p39.js',''],
		['Bell-P-59/p59.js',''],
		['Bell-X1/x1.js',''],
		['Bernard-HV220/hv220.js',''],
		['bf109/bf109g14.js',''],
		['Bleriot-SPAD-S.510/bleriot-XI.js',''],
		['bo105/bo105.js',''],
		['Boeing-247/b247.js',''],
		['Boeing314/Boeing314Clipper.js',''],
		['Bombardier-415/cl415.js',''],
		['Br-761/br-761.js',''],
		['Brabazon/brabazon.js',''],
		['Breda-B.Z.308/bz308.js',''],
		['Breguet-XIX/breguet19.js',''],
		['Buccaneer/buccaneer.js',''],
		['Bugatti/bugatti.js',''],
		['Burnelli-CBY-3/burnelli.js',''],
		['BV-141/bv-141.js',''],
		['BV-170/bv170.js',''],
		['C-160-Transall/c160.js',''],
		['C-2A/c-2a.js',''],
		['C130/c130.js',''],
		['c150/cessna150.js',''],
		['c182/c182.js',''],
		['c310/c310-dpm.js',''],
		['c310u3a/c310u3a.js',''],
		['C460/c460.js',''],
		['C561/c561.js',''],
		['C684/C684.js',''],
		['C684/G-164A.js',''],
		['C684/G-164A1.js',''],
		['Campini-Caproni-N1/ccn1.js',''],
		['CanberraBI8/CanberraBI8.js',''],
		['Cap10B/cap10b.js',''],
		['Caravelle/caravelle.js',''],
		['Carreidas/carreidas.js',''],
		['Caudron-G3/g3.js',''],
		['Caudron-G4/g4.js',''],
		['Cessna-208-Caravan/caravan.js',''],
		['Cessna-421-Golden-Eagle/c421.js',''],
		['Cessna337/Cessna337_Skymaster.js',''],
		['ch47/ch47.js',''],
		['ch53e/ch53e.js',''],
		['Citation/Citation-II.js',''],
		['Citation-Bravo/bravo.js',''],
		['CitationX/CitationX.js',''],
		['Coanda-1910/coanda1910.js',''],
		['Commonwealth-Ca-12/ca12.js',''],
		['ComperSwift/ComperSwift-000-043.js',''],
		['Concorde/concorde.js',''],
		['Convair-XFY-1-Pogo/pogo.js',''],
		['couzinet70/couzinet70.js',''],
		['cri-cri/MC-15.js',''],
		['CRJ-200/crj-200.js',''],
		['CRJ700-family/CRJ1000.js',''],
		['CRJ700-family/CRJ700.js',''],
		['CRJ700-family/CRJ900.js',''],
		['Cub/Cub.js',''],
		['Curtiss-Jenny/jenny.js',''],
		['Curtiss-P40/p40.js',''],
		['D510/d510.js',''],
		['D520/d520.js',''],
		['Dauphin/dauphin.js',''],
		['dc2/dc2.js',''],
		['dc3/dc-3.js',''],
		['dc6/dc6.js',''],
		['dc8-63/dc8-63.js',''],
		['dc8-73/dc8-73.js',''],
		['Deperdussin/deperdussin.js',''],
		['DerKleineUhu/DerKleineUhu.js',''],
		['DG-101G/dg101g.js',''],
		['DG-101G/dg101g1.js',''],
		['DH-106/dh106.js',''],
		['DH-88/dh88.js',''],
		['DH-89/dh89.js',''],
		['DH-91/dh91.js',''],
		['dhc1/dhc1.js',''],
		['dhc2/dh2.js',''],
		['dhc2/dhc2.js',''],
		['dhc3/dhc3.js',''],
		['dhc4/dhc4.js',''],
		['dhc6/dhc-6.js',''],
		['dhc8/dhc8.js',''],
		['Diamond-Da40/da40.js',''],
		['Diamond-Da42/da42.js',''],
		['DO-26/do26.js',''],
		['DO-335/do335.js',''],
		['DO-X/dox.js',''],
		['Douglas-Dolphin/dolphin.js',''],
		['DR400/dr400.js',''],
		['Dragonfly/Dragonfly.js',''],
		['Dromader/M18B_Dromader.js',''],
		['E-2C/E-2C-model.js',''],
		['E3B/E3B.js',''],
		['ec130/ec130.js',''],
		['ec130/ec130b4.js',''],
		['ec135/ec135.js',''],
		['ercoupe/ercoupe.js',''],
		['Etrich-Taube/taube.js',''],
		['F-106-dart/f106.js',''],
		['F-117/F-117.js',''],
		['f-14b/f14.js',''],
		['F-35B/F-35B.js',''],
		['F-86/f86f.js',''],
		['F-8E-Crusader/f8e.js',''],
		['f15c/f15c.js',''],
		['f16/f16.js',''],
		['f18/f18.js',''],
		['F4U/f4u.js',''],
		['F6F-Hellcat/f6f.js',''],
		['F7F-Tigercat/f7f.js',''],
		['F80C/f80.js',''],
		['fa223/fa223.js',''],
		['Fairchild-C119/c119.js',''],
		['Fairchild-Metroliner/metroliner.js',''],
		['Fairey-Gannet/gannet.js',''],
		['Falcon-50/falcon50.js',''],
		['FK9MK2/fk9mk2.js',''],
		['fkdr1/dr1.js',''],
		['flash2a/flash2a.js',''],
		['Focke-Wulf-F19-ente/f19.js',''],
		['Fokker-Eindecker-EIII/eiii.js',''],
		['Fokker-S-11/s11.js',''],
		['fokker100/fokker100.js',''],
		['fokker100/fokker1001.js',''],
		['fokker100/fokker70.js',''],
		['fokker50/fokker50.js',''],
		['Ford-Trimotor/trimotor.js',''],
		['Fouga-Magister/fouga.js',''],
		['fw190/fw190a8.js',''],
		['Fw200/fw200.js',''],
		['Fw61/Fw61.js',''],
		['Gee-Bee/geebee.js',''],
		['Gloster-Meteor/gloster-meteor.js',''],
		['Gloster-Whittle/whittle.js',''],
		['Grob-Astir/astir.js',''],
		['Grob-G109/g109.js',''],
		['Grob-G115/g115.js',''],
		['H-21C-Shawnee/h21c-base-v1.js',''],
		['H1-Racer/h1.js',''],
		['H4-Hercules/h4-hercules.js',''],
		['Handley-Page-Halifax/halifax.js',''],
		['Hansajet/Hansajet.js',''],
		['harrier/harrier-or.js',''],
		['harrier/harrier.js',''],
		['Hawker-Siddeley-Nimrod/nimrod.js',''],
		['He-111/he111.js',''],
		['He162/He162.js',''],
		['Heinkel-He-111/he111h.js',''],
		['Heinkel-He-178/he178.js',''],
		['Heinkel-He-280/he280.js',''],
		['HM-14/hm-14.js',''],
		['HondaJet/hondajet.js',''],
		['Hornet/hornet2.js',''],
		['Horsa/horsa.js',''],
		['HS-P-75/hsp75.js',''],
		['Hughes-XF11/val.js',''],
		['Hughes-XF11/xf11.js',''],
		['Hunter/hunter-ga11.js',''],
		['Hurricane/hurricane-new.js',''],
		['Hurricane/hurricane-ver-24.js',''],
		['Hurricane/hurricane-ver-25.js',''],
		['Hurricane/hurricane-ver-26.js',''],
		['Hurricane/hurricane-ver-27.js',''],
		['Hurricane/hurricane-ver-28.js',''],
		['Hurricane/hurricane-ver-29.js',''],
		['IL-2/il2.js',''],
		['j22/j22.js',''],
		['j7w/j7w.js',''],
		['Jaguar/jaguar.js',''],
		['JAS39-Gripen/gripen.js',''],
		['jetman/jetman.js',''],
		['JT-5B/JT-5B.js',''],
		['Ju-87/ju87.js',''],
		['ju-88/ju88a4.js',''],
		['ju52/ju52.js',''],
		['Junkers-F13/f13.js',''],
		['Junkers-G.38ce/g38.js',''],
		['Junkers-W34/w34.js',''],
		['K-7/k7.js',''],
		['K5Y1/K5Y1.js',''],
		['Ka-50/ka50.js',''],
		['Katana/katana.js',''],
		['KC135/KC135.js',''],
		['Ki-84/ki-84.js',''],
		['KM/km.js',''],
		['kodiak/kodiak.js',''],
		['L-1011-500/L-1011-500.js',''],
		['l39/l39.js',''],
		['La-5/la5.js',''],
		['Lancair-235/lancair235.js',''],
		['LATE-29/late29.js',''],
		['Late-631/late631.js',''],
		['Leduc-022/leduc022.js',''],
		['Lightning/lightning-f1a.js',''],
		['Lionceau/lionceau.js',''],
		['Lockheed-Martin-FA-22A-Raptor/Lockheed-Martin-FA-22A-Raptor.js',''],
		['Lockheed-NF104/F-104C.js',''],
		['Lockheed-NF104A/nf104a.js',''],
		['Lockheed-Vega/vega.js',''],
		['Lockheed1049/Lockheed1049.js',''],
		['Long-EZ/long-ez.js',''],
		['Long-EZ/lynx.js',''],
		['M-XE/m-xe.js',''],
		['Macchi-Castoldi-MC72/mc72.js',''],
		['Macchi-M33/m33.js',''],
		['Martin-Baker-MB5/mb5.js',''],
		['MB326/MB326.js',''],
		['ME-209-V1/me209v1.js',''],
		['ME-262/me262.js',''],
		['ME-262HGIII/me262hg3.js',''],
		['me163/me163.js',''],
		['me323/me323.js',''],
		['Messerschmitt-BF110/bf110.js',''],
		['Messerschmitt-Libelle/libelle.js',''],
		['Messerschmitt-P1101/p1101.js',''],
		['MiG-15/MiG-15bis.js',''],
		['MiG-21bis/MiG-21bis.js',''],
		['Mig-29/Mig-29.js',''],
		['Mil-Mi-12/mi12.js',''],
		['mirage2000/m2000-5.js',''],
		['mirage2000/mirage2000.js',''],
		['MirageIII/mirageIII.js',''],
		['MirageIV/mirageIV.js',''],
		['Mirage_F1/Mirage_F1.js',''],
		['mosquito/mosquito.js',''],
		['mosquito/mosquitofb6.js',''],
		['mosquito/mosquitofb7.js',''],
		['MRJ/MRJ90.js',''],
		['MS-406/ms406.js',''],
		['Nakajima-B5N/kate.js',''],
		['Nieuport-11/nieuport11.js',''],
		['Noratlas/noratlas.js',''],
		['Nordstern/Nordstern.js',''],
		['Northrop-P61/p61.js',''],
		['Northrop-xb35/xb35.js',''],
		['ogel/SinglePiston.js',''],
		['OH-1/OH-1.js',''],
		['ornithopter/C-GPTR-8-4.js',''],
		['OV10/OV10.js',''],
		['P-38-Lightning/P38-base.js',''],
		['P-38-Lightning/p38.js',''],
		['P180/P180.js',''],
		['P47/p47d-30.js',''],
		['p51d/p51d-jw.js',''],
		['pa22/Tri-Pacer.js',''],
		['PaperAirplane/paperairplane.js',''],
		['paraglider/pg.js',''],
		['payen-pa100/pa100.js',''],
		['PBY-Catalina/pby6S.js',''],
		['PC-12/pc12.js',''],
		['PC-21/PC-21.js',''],
		['PC-9M/PC-9M.js',''],
		['Pioneer-200/pioneer200.js',''],
		['Piper-PA-18/pa18.js',''],
		['Piper-PA-32/pa32.js',''],
		['pittss1c/s1c.js',''],
		['Polikarpov-I16/i16.js',''],
		['Pond-Racer/pond.js',''],
		['Potez-630/potez630.js',''],
		['Pterodactyl/pterodactyl.js',''],
		['Quickie/quickie2.js',''],
		['R22/r22.js',''],
		['R44/r44.js',''],
		['RAF-S-E-5/se5.js',''],
		['rallye-MS893/rallye-MS893.js',''],
		['Rascal/Rascal110-000-013.js',''],
		['RV-6A/RV-6A.js',''],
		['Ryan-Navion/navion.js',''],
		['Ryan-PT22/pt22.js',''],
		['Ryan-SoSL/ryan-sosl.js',''],
		['SaabJ35F/draken.js',''],
		['santa/santa.js',''],
		['santa/sled.js',''],
		['seahawk/SeaHawk-FGA6-WV859.js',''],
		['seahawk/SeaHawk-FGA6-WV908.js',''],
		['seahawk/SeaHawk-WV908.js',''],
		['seahawk/SeaHawk.js',''],
		['SeaVixen/sea-vixen-FAW2-ver1.js',''],
		['SeaVixen/sea-vixen-FAW2-ver2.js',''],
		['SenecaII/SenecaII.js',''],
		['seymour/seymour.js',''],
		['sf25b/s6b.js',''],
		['sf25b/sf25b.js',''],
		['sf25b/sf25c.js',''],
		['sgs233/sgs233.js',''],
		['Short_Empire/Short_Empire.js',''],
		['Sikorsky-76C/s76c.js',''],
		['Sikorsky-S38/s38.js',''],
		['Sikorsky-S58/s58.js',''],
		['Skyranger/skyranger.js',''],
		['Skyvan/skyvan.js',''],
		['SM-55/s55.js',''],
		['sm79/sm79.js',''],
		['Socata-ST10/st10.js',''],
		['sopwithCamel/camel.js',''],
		['SpaceShip-One/spaceshipone.js',''],
		['SPAD-VII/spadvii.js',''],
		['Spitfire/spitfireIIa.js',''],
		['Spitfire/spitfireVb.js',''],
		['sr20/sr20.js',''],
		['SR71-BlackBird/sr71.js',''],
		['Stampe-SV4/stampe.js',''],
		['Starship/starship.js',''],
		['Stearman/stearman.js',''],
		['Stieglitz/Stieglitz.js',''],
		['Stiletto/stiletto.js',''],
		['Storch/storch.js',''],
		['SU-37/SU-37-005-125h.js',''],
		['Super-Etendard/super-etendard.js',''],
		['Super-Frelon/superfrelon.js',''],
		['superguppySGT/superguppySGT.js',''],
		['Superwal/Superwal.js',''],
		['T-4/T-4.js',''],
		['T-50/T-50.js',''],
		['T37/T-37.js',''],
		['T38/T38.js',''],
		['TBM-Avenger/avenger.js',''],
		['Tecnam-P92/main.js',''],
		['Tigre/tigre.js',''],
		['TU-114/TU-114-003-013b.js',''],
		['Tu-134/tu1341.js',''],
		['TU-95/tu95.js',''],
		['tu134/tu134.js',''],
		['tu154/tu154B.js',''],
		['ufo/ufo.js',''],
		['UH-1/uh1.js',''],
		['UH-60/uh60.js',''],
		['V22-Osprey/v22.js',''],
		['V22-Osprey/v221.js',''],
		['Velocity-XL/velocity.js',''],
		['Vickers-Vimy/vimy.js',''],
		['victor/victor.js',''],
		['vulcanb2/vulcanb2.js',''],
		['Westland-Whirlwind/whirlwind.js',''],
		['wrightFlyer1903/WrightFlyer-pb-jw.js',''],
		['X15/X15.js',''],
		['XB-70/XB-70.js',''],
		['Yak-18T/yak18t.js',''],
		['Yak-36/Yak-36.js',''],
		['yak3/yak3.js',''],
		['YardStik/yardstik.js',''],
		['YardStik/YF23-006-008g11.js',''],
		['YF-23/YF23-5-1h9.js',''],
		['YS-11/YS-11.js',''],
		['ZF_Navy_free_balloon/ZF.js',''],
		['ZivkoEdge/ZivkoEdge540.js',''],
		['Zlin-50lx/z50lx.js',''],
		['ZLT-NT/ZLT-NT.js',''],
		['zzz-operations/bus-ba.js',''],
		['zzz-operations/catering_vehicle.js',''],
		['zzz-operations/chariot-ba.js',''],
		['zzz-operations/citerne-ba.js',''],
		['zzz-operations/Goldhofert.js',''],
		['zzz-operations/Goldhofert1.js',''],
		['zzz-operations/Shorttug.js',''],
		['zzz-operations/stairs.js',''],
		['zzz-operations/followme/followme.js',''],
		['zzz-operations/followme/followme1.js',''],
		['zzz-operations/jeep/jeep.js',''],
		['zzz-operations/pushback/pushback.js',''],
		['zzz-operations/snowplow/snowplow.js',''],
		['zzz-weapons/AIM120.js',''],
		['zzz-weapons/AIM9.js',''],
		['zzz-weapons/gbu16.js','']
	]