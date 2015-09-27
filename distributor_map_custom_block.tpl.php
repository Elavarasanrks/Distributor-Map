<?php 
  global $base_path;
  $items = $variables['items'];
  $js_path = drupal_get_path('module', 'distributor_map') . '/js/distributor_map_view.js';
  drupal_add_js($js_path, 'file');
  $map_img = $items['distributor_map_image_path'];
  drupal_add_css('.mappoint{ display:block;z-index: 10; position:absolute;cursor:pointer; }
  #dismap {display: block;width:' . $items['distributor_map_image_width'] . 'px;height:' . $items['distributor_map_image_height'] . 'px;z-index:-1; background:url(' . $map_img . ') 0 0 no-repeat  }',array(
    'type' => 'inline',
    )
  );
  $css_path = drupal_get_path('module', 'distributor_map') . '/css/map.css';
  drupal_add_css($css_path, 'file');
  $imgpath = $items['distributor_map_marker_path'];
  $content = '';
  $contenttype = variable_get('distributor_map_ctype');
  $query = "SELECT node.nid AS nid FROM {node} node	WHERE (( (node.status = '1') AND (node.type IN  (:contenttype)) ))";
    $result = db_query($query, array(':contenttype' => $contenttype));
?>
<div id="dismap">
<?php
  foreach ($result as $key => $record) {
    $nid = $record->nid;
    $node = node_load($nid);
    $address = '';
    $field_dis_xy = field_get_items('node', $node, 'field_dis_xy');
    $field_dis_text = field_get_items('node', $node, 'field_dis_text');
    if (isset($field_dis_text[0]['value'])) {
	  $address = $field_dis_text[0]['value'];
    }
    if (isset($field_dis_xy[0]['value'])) {
	  $coord = $field_dis_xy[0]['value'];
	  $arr_coord = explode(',', $coord);
	  $adjustx = $items['distributor_map_marker_width'] / 2;
	  $adjusty = $items['distributor_map_marker_height'];
	  $arr_coord[0] -= $adjustx;
	  $arr_coord[1] -= $adjusty;
?>		
<img src="<?php echo $imgpath ?>" block="<?php echo ($key + 1); ?>" width="<?php echo $items['distributor_map_marker_width']; ?>" height="<?php echo $items['distributor_map_marker_height']; ?>" class="mappoint" mapimg="<?php echo $imgpath; ?>" style="margin-left:<?php echo $arr_coord[0]; ?>px;margin-top:<?php echo $arr_coord[1];?>px" />	
<div class="block<?php echo ($key + 1); ?> markerbg" style="margin-left:<?php echo  ($arr_coord[0] + 17); ?>px;margin-top:<?php echo ($arr_coord[1] - 20); ?>px;"><h3><?php echo $node->title; ?></h3><p><?php echo $address; ?></p></div>
<?php
    }
  }
?>
</div>