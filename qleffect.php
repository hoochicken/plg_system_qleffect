<?php
/**
 * @package        plg_system_qleffect
 * @copyright    Copyright (C) 2023 ql.de All rights reserved.
 * @author        Mareike Riegel mareike.riegel@ql.de
 * @license        GNU General Public License version 2 or later; see LICENSE.txt
 */

//no direct access
use Joomla\CMS\Factory;

defined('_JEXEC') or die ('Restricted Access');

jimport('joomla.plugin.plugin');

class plgSystemQleffect extends JPlugin
{
    public $params;
    public $data;

    /**
     * constructor
     * setting language
     * @param $subject
     * @param $config
     */
    public function __construct(& $subject, $config)
    {
        parent::__construct($subject, $config);
        $this->loadLanguage();
        if ($this->isJoomla4(JVERSION)) $this->includeScripts();
        else $this->includeScriptsJoomla3();
    }

    /**
     *
     */
    public function isJoomla4($version)
    {
        return 4 <= $version;
    }

    /**
     *  method to get documents and scripts needed
     */
    function includeScripts()
    {
        $wam = Factory::getDocument()->getWebAssetManager();
        if ((bool) $this->params->get('jquery', false)){
            $wam->useScript('jquery');
        }
        $wam->registerAndUseScript('plg_system_qleffect', 'plg_system_qleffect/qleffect.js');
        $wam->registerAndUseStyle( 'plg_system_qleffect', 'plg_system_qleffect/qleffect.css');
    }

    /**
     *  method to get documents and scripts needed
     */
    function includeScriptsJoomla3()
    {
        if (true === (bool) $this->params->get('jquery', false)){
            JHtml::_('jquery.framework');
        }
        JHtml::_('stylesheet', 'media/plg_system_qleffect/css/qleffect.css');
        JHtml::_('script', 'media/plg_system_qleffect/js/qleffect.js');
    }

    /**
     *
     */
    public function onAfterRender()
    {

    }
}